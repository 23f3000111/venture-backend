const express = require("express");
const cors = require("cors");
const app = express();

// ✅ Allow all origins
app.use(cors());
app.options("*", cors()); // ✅ Handle preflight OPTIONS request

app.use(express.json());

const { intializeDatabase } = require("./db/db.connect")
const Venture = require("./models/venture.models")

intializeDatabase()

app.get("/venture", async (req, res) => {
  try {
    const event = await Venture.find();
    if (!event || event.length === 0) {
      return res.status(404).json({ error: "No Event Found" });
    }
    res.json(event);
  } catch (error) {
    console.error("GET /venture error:", error);
    res.status(500).json({ error: "Failed to fetch venture." });
  }
});

module.exports = app;

