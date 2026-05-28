import express from 'express';
import pb from '../utils/pocketbaseClient.js';
import logger from '../utils/logger.js';

const router = express.Router();

// POST /notifications/subscribe
router.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  logger.info(`Processing subscription request for email: ${email}`);

  try {
    const existingRecord = await pb.collection('JobNotifications').getFirstListItem(`email = "${email}"`);
    logger.info(`Email ${email} already subscribed`);
    return res.json({ success: true, message: 'Already subscribed' });
  } catch (error) {
    if (error.status !== 404) {
      throw error;
    }
  }

  const newRecord = await pb.collection('JobNotifications').create({
    email,
    subscribed: true,
    created: new Date().toISOString(),
  });

  logger.info(`Successfully subscribed email: ${email}`);

  res.json({ success: true, message: 'Subscribed successfully' });
});

// GET /notifications/new-jobs
router.get('/new-jobs', async (req, res) => {
  logger.info('Fetching jobs posted in the last 7 days');

  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

  const jobs = await pb.collection('jobs').getList(1, 50, {
    sort: '-created',
    filter: `created >= "${sevenDaysAgo}"`,
  });

  const formattedJobs = jobs.items.map(job => ({
    id: job.id,
    title: job.title,
    company: job.company,
    location: job.location,
    salary_min: job.salary_min,
    salary_max: job.salary_max,
    created: job.created,
  }));

  logger.info(`Found ${formattedJobs.length} jobs posted in the last 7 days`);

  res.json(formattedJobs);
});

export default router;
