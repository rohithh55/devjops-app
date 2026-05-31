import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function JobDetailPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(
      `http://3.110.193.160:8091/api/collections/jobs/records/${id}`
    )
      .then((res) => res.json())
      .then((data) => setJob(data))
      .catch((err) =>
        console.error("Error fetching job:", err)
      );
  }, [id]);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-bold">
          Loading job details...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-white">
      <div className="max-w-3xl mx-auto shadow-lg rounded-xl p-8 border">

        <h1 className="text-3xl font-bold mb-4">
          {job.title}
        </h1>

        <p className="text-lg mb-2">
          <strong>Company:</strong>{" "}
          {job.company}
        </p>

        <p className="text-lg mb-2">
          <strong>Location:</strong>{" "}
          {job.location}
        </p>

        <p className="text-lg mb-6">
          <strong>Description:</strong>{" "}
          {job.description ||
            "No description provided."}
        </p>

        {job.jobUrl && (
          <a
            href={job.jobUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-bold mr-4"
          >
            Apply Now
          </a>
        )}

        <a
          href="/jobs"
          className="inline-block px-6 py-3 border border-black rounded-lg font-semibold"
        >
          Back to Jobs
        </a>
      </div>
    </div>
  );
}

export default JobDetailPage;

