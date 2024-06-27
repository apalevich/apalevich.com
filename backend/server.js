// Require necessary Node modules
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const withPrompt = require("./mate/prompt.js");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const Airtable = require("airtable");
const OpenAI = require("openai");

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
const openai = new OpenAI({ apiKey: process.env.OPENAI_SECRET });

app.get("/check-health", (req, res) => {
  res.status(200).send("It Works! Well Done!");
});

// MATE SECTION
const mate_prefix = "/mate";

app.post(`${mate_prefix}/submit-form`, upload.none(), (req, res) => {
  const { firstName, email } = req.body;
  const entry = {
    fields: {
      Name: firstName,
      Email: email,
    },
  };

  base(process.env.AIRTABLE_TAB).create([entry], function (err, records) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    records.forEach(function (record) {
      res
        .status(200)
        .send(
          "Your application submitted successfully. We will contact you via email soon. Cheers!",
        );
    });
  });
});

app.post(`${mate_prefix}/analyze`, async (req, res) => {
  const { id, user_id, filename, parsedCode } = req.body;

  openai.chat.completions
    .create({
      messages: [
        { role: "system", content: withPrompt({ code: parsedCode, filename }) },
        // { "role": "user", "content": content }
      ],
      model: process.env.OPENAI_MODEL,
      response_format: { type: "json_object" },
    })
    .then((output) => {
      res.status(200).send(output);
    })
    .catch((err) => {
      res.status(500).send("Error communicating with OpenAI API");
    });
});

app.post(`${mate_prefix}/feedback`, async (req, res) => {
  const { Email, Notes } = req.body;

  const entry = {
    fields: {
      Email,
      Notes,
      Date: new Date().toISOString(),
    },
  };

  base("feedback").create([entry], function (err, records) {
    if (err) {
      res.status(500).send("Server error while inserting data");
      return;
    }
    records.forEach(function (record) {
      res
        .status(200)
        .send("Receiver your feedback. Yummy! I really appreciate it 🫶");
    });
  });
});

// Route for downloading the file
app.get(`${mate_prefix}/download`, (req, res) => {
  const file = "./upload/AI_reviewer_chrome-0.3.1.zip"; // Replace with the path to your file
  res.download(file);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
