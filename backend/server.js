// Require necessary Node modules
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const Airtable = require("airtable");
const OpenAI = require("openai");
const prompt = require("./mate/prompt.js")

// Set the port for the server to listen on
const PORT = process.env.PORT || 8000;

// Create interfaces
const app = express();
app.use(cors());
app.use(express.json()); // Parses requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // Parses requests with urlencoded payloads

const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
  process.env.AIRTABLE_BASEID,
);
const openai = new OpenAI({apiKey: process.env.OPENAI_SECRET});

app.get("/check-health", (req, res) => {
  res.status(200).send("It Works! Well Done!");
});

// Endpoint to handle POST request for form data
app.post("/submit-form", (req, res) => {
  const { Name, Email } = req.body;

  const entry = {
    fields: {
      Name,
      Email,
    },
  };

  base(process.env.AIRTABLE_TAB).create([entry], function (err, records) {
    if (err) {
      res.status(500).send("Server error while inserting data");
      return;
    }
    records.forEach(function (record) {
      res
        .status(200)
        .send(
          "Your application submitted successfully. Will contact you until the end of November. Cheers!",
        );
    });
  });
});

// MATE SECTION
const mate_prefix = "/mate";
app.post(`${mate_prefix}/analyze`, async (req, res) => {
  // res.status(200).send({ text: "YOUR CODE WAS RECEIVED. CONGRATS!" });
  
  const { content } = req.body;

  openai.chat.completions.create({
    messages: [{"role": "system", "content": prompt},
        {"role": "user", "content": content}],
    model: "gpt-3.5-turbo-1106",
  })
  .then(output => {
    console.log(output.choices[0].message.content)
    res.status(200).send(output);
  })
  .catch(err => {res.status(500).send("Error communicating with OpenAI API");})
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
