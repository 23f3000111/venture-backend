const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({ origin: "*" }));

app.use(express.json());
const { intializeDatabase } = require("./db/db.connect");
const Venture = require("./models/venture.models");

intializeDatabase();

// Handle OPTIONS request for preflight CORS checks
app.options('*', cors({ origin: "*" }));

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
