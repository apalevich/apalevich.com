// Require necessary Node modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Create an Express application
const app = express();

// Set the port for the server to listen on
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON and urlencoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up MySQL connection
const pool = mysql.createPool({
  connectionLimit : 10, // maximum number of connections
  host     : 'localhost', // database host
  user     : 'your_username', // your database username
  password : 'your_password', // your database password
  database : 'your_database_name' // your database name
});

// Function to insert form data into MySQL
const insertFormData = (formData, callback) => {
  pool.getConnection((err, connection) => {
    if(err) throw err; // not connected!
    
    const { name, email, message } = formData;
    
    // Insert form data into your_table_name
    const sql = `INSERT INTO your_table_name (name, email, message) VALUES (?, ?, ?)`;
    connection.query(sql, [name, email, message], (error, results) => {
      // release the connection back to the pool
      connection.release();
      
      if (error) return callback(error, null);
      return callback(null, results);
    });
  });
};

app.get('/health', (req, res) => {
  console.log(req);
  res.end('It Works! Well Done!');
});

// Endpoint to handle POST request for form data
app.post('/submit-form', (req, res) => {
  const formData = req.body;

  // Call function to insert form data into MySQL
  insertFormData(formData, (error, results) => {
    if (error) {
      res.status(500).send('Server error while inserting data');
    } else {
      res.status(200).send('Form data submitted successfully');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
