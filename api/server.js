import express from "express";
import PocketBase from "pocketbase";
import client from "prom-client";

const app = express();

const pb = new PocketBase("http://13.200.228.110:8090");

// Admin token
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3ODIyMjEzOTcsImlkIjoiOW9pNmQ1MDRieDhrYjRtIiwidHlwZSI6ImFkbWluIn0.yNJ6aPPHpH98bfCtnOzadewoMCnxASbLZxSzw4fwGdk";

pb.authStore.save(TOKEN);

// Prometheus
const register = new client.Registry();

client.collectDefaultMetrics({
  register,
});

const httpRequests = new client.Counter({
  name: "devjops_http_requests_total",
  help: "Total HTTP Requests",
  labelNames: ["method", "route", "status"],
});

register.registerMetric(httpRequests);

app.use((req, res, next) => {
  res.on("finish", () => {
    httpRequests.inc({
      method: req.method,
      route: req.route?.path || req.path,
      status: String(res.statusCode),
    });
  });

  next();
});

app.get("/api/jobs", async (req, res) => {
  try {
    const jobs = await pb.collection("devops").getFullList({
      sort: "-created",
    });

    res.json(jobs);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: err.message,
    });
  }
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.listen(4000, () => {
  console.log("API running on port 4000");
});
