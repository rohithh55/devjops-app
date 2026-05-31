import express from 'express';
import logger from '../utils/logger.js';

const router = express.Router();

const GITHUB_USERNAME = 'rohithh55';
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

const DEVOPS_KEYWORDS = ['aws', 'devops', 'infrastructure', 'terraform', 'kubernetes', 'docker', 'ansible', 'cloudformation'];

function isDevOpsRepo(repo) {
  const description = (repo.description || '').toLowerCase();
  const language = (repo.language || '').toLowerCase();
  const name = (repo.name || '').toLowerCase();
  const combinedText = `${name} ${description} ${language}`;

  return DEVOPS_KEYWORDS.some(keyword => combinedText.includes(keyword));
}

router.get('/', async (req, res) => {
  logger.info(`Fetching repositories for GitHub user: ${GITHUB_USERNAME}`);

  const response = await fetch(GITHUB_API_URL);

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
  }

  const repos = await response.json();

  const filteredRepos = repos
    .filter(isDevOpsRepo)
    .map(repo => ({
      name: repo.name,
      description: repo.description,
      stargazers_count: repo.stargazers_count,
      language: repo.language,
      html_url: repo.html_url,
    }));

  logger.info(`Found ${filteredRepos.length} DevOps/AWS related repositories`);

  res.json(filteredRepos);
});

export default router;
