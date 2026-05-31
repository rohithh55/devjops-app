import React from "react";

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0077b6",
        color: "white",
        padding: "40px",
      }}
    >
      {/* HERO */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "70px", marginBottom: "20px" }}>
          Build The Future Of Cloud
        </h1>

        <p style={{ fontSize: "24px" }}>
          The premier destination for DevOps engineers,
          SREs, and cloud architects.
        </p>

        <div style={{ marginTop: "30px" }}>
          <a
            href="/jobs"
            style={{
              background: "white",
              color: "#0077b6",
              padding: "15px 30px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            🔍 Browse Jobs
          </a>
        </div>
      </div>

      {/* 3 COLUMNS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "30px",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h2>🐙 GitHub Projects</h2>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            View DevOps Projects
          </a>
        </div>

        {/* CENTER */}
        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h2>🔗 Quick Links</h2>

          <p><a href="/jobs" style={{ color: "white" }}>Browse Jobs</a></p>
          <p><a href="/login" style={{ color: "white" }}>Login</a></p>
          <p><a href="/signup" style={{ color: "white" }}>Signup</a></p>
        </div>

        {/* RIGHT */}
        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h2>📬 Subscribe For Job Alerts</h2>

          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
            }}
          />

          <button
            style={{
              width: "100%",
              marginTop: "15px",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              fontWeight: "bold",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* JOBS */}
      <div
        style={{
          marginTop: "40px",
          background: "rgba(255,255,255,0.15)",
          padding: "25px",
          borderRadius: "20px",
        }}
      >
        <h2>🔥 Latest Jobs</h2>

        <p>DevOps Engineer - Remote</p>
        <p>Cloud Engineer - Bengaluru</p>
      </div>
    </div>
  );
}

