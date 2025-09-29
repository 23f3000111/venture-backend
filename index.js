const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({ origin: "*" }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

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