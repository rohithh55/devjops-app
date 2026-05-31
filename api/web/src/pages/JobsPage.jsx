import React, { useEffect, useState } from "react";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error loading jobs:", err));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0077b6",
        padding: "50px 20px",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "60px",
          fontWeight: "bold",
          marginBottom: "50px",
        }}
      >
        Available Jobs
      </h1>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {jobs.map((job) => (
          <div
            key={job.id}
            style={{
              background: "rgba(255,255,255,0.15)",
              borderRadius: "25px",
              padding: "30px",
              marginBottom: "25px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* LEFT SIDE */}
            <div style={{ width: "75%" }}>
              <h2
                style={{
                  fontSize: "38px",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >
                {job.title}
              </h2>

              <div
                style={{
                  fontSize: "22px",
                  marginBottom: "15px",
                }}
              >
                🏢 {job.company || "Company"} | 📍 {job.location}
              </div>

              <details>
                <summary
                  style={{
                    cursor: "pointer",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Description : View More
                </summary>

                <p
                  style={{
                    marginTop: "12px",
                    fontSize: "17px",
                    lineHeight: "1.6",
                  }}
                >
                  {job.description}
                </p>
              </details>
            </div>

            {/* RIGHT SIDE */}
            <div
              style={{
                width: "25%",
                textAlign: "center",
              }}
            >
              <a
                href={job.field}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <div
                  style={{
                    fontSize: "80px",
                  }}
                >
                  🚀
                </div>

                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  APPLY NOW
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

