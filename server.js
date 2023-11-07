// Require necessary Node modules
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const airtable = require('airtable');

// Set the port for the server to listen on
const PORT = process.env.PORT || 8000;

// Create interfaces
var base = new airtable({apiKey: process.env.AIRTABLE_TOKEN}).base(process.env.AIRTABLE_BASEID);
const app = express();
app.use(cors());
app.use(express.json()); // Parses requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // Parses requests with urlencoded payloads

app.get('/check-health', (req, res) => {
  res.status(200).send('It Works! Well Done!');
});

// Endpoint to handle POST request for form data
app.post('/submit-form', (req, res) => {
  const { Name, Email } = req.body;

  const entry = {
    fields: {
      Name,
      Email,
    }
  };

  base(process.env.AIRTABLE_TAB).create([entry], function(err, records) {
    if (err) {
      res.status(500).send('Server error while inserting data');
      return;
    }
    records.forEach(function (record) {
      res.status(200).send('Your application submitted successfully. Will contact you until the end of November. Cheers!');
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
