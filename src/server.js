// ============================================================
//  London Ltd — Node.js / Express Backend
//  Run: npm run server
//  Or:  node src/server.js
// ============================================================

import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: "*" }));
app.use(express.json());

// In-memory store (swap for PostgreSQL / MongoDB in production)
const submissions = [];

// POST /api/contact — receive a contact form submission
app.post("/api/contact", (req, res) => {
  const { name, email, project, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Fushat e detyrueshme mungojnë." });
  }

  const entry = {
    id: Date.now(),
    name,
    email,
    project: project || "E përgjithshme",
    message,
    createdAt: new Date().toISOString(),
  };

  submissions.push(entry);
  console.log(`[${entry.createdAt}] New submission from ${entry.name} <${entry.email}>`);

  return res.status(201).json({ success: true, message: "Mesazhi u ruajt me sukses." });
});

// GET /api/contact — list all submissions (protect with auth in production!)
app.get("/api/contact", (req, res) => {
  res.json({ success: true, count: submissions.length, data: submissions });
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "London Ltd API" });
});

app.listen(PORT, () => {
  console.log(`London Ltd Node.js API running → http://localhost:${PORT}`);
});
