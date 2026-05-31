import express from "express";
import Database from "better-sqlite3";

const app = express();

const db = new Database(
  "/home/ec2-user/DevjOps/api/pb_data/data.db",
  { readonly: true }
);

app.get("/api/jobs", (req, res) => {
  try {
    const jobs = db
      .prepare(`
        SELECT
          id,
          title,
          company,
          location,
          description,
          field
        FROM devops
        ORDER BY created DESC
      `)
      .all();

    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
});

app.listen(4000, () => {
  console.log("API running on port 4000");
});

