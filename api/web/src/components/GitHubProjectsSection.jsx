import React from "react";

const GitHubProjectsSection = () => {
  return (
    <section
      id="github-projects-section"
      className="p-8 bg-gray-900 text-white text-center"
    >
      <h2 className="text-2xl font-bold mb-4">GitHub Projects</h2>
      <p className="mb-4">
        Explore my DevOps and Cloud Engineering projects on GitHub.
      </p>
      <a
        href="https://github.com/rohithh55"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-300"
      >
        GitHub Projects
      </a>
    </section>
  );
};

export default GitHubProjectsSection;

