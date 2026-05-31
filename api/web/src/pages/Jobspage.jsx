import React, { useEffect, useState } from "react";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/api/collections/devops/records")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data.items || []);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0077b6",
        padding: "40px",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "60px",
          fontWeight: "bold",
          marginBottom: "40px",
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
            <div style={{ width: "75%" }}>
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  marginBottom: "10px",
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
                🏢 {job.company} | 📍 {job.location}
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

                <div
                  style={{
                    marginTop: "15px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  }}
                >
                  {job.description}
                </div>
              </details>
            </div>

            <div
              style={{
                width: "25%",
                textAlign: "center",
              }}
            >
              <a
                href={job.field}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <div style={{ fontSize: "80px" }}>
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

