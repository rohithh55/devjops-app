import { Router } from 'express';
import pb from '../utils/pocketbaseClient.js';
import logger from '../utils/logger.js';

const router = Router();

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
    // Check if already subscribed
    const existingRecord = await pb.collection('JobNotifications')
      .getFirstListItem(`email="${email}"`);

    logger.info(`Email ${email} already subscribed`);
    return res.json({ success: true, message: 'Already subscribed' });
  } catch (error) {
    if (error.status !== 404) {
      logger.error('Error checking subscription:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Create new subscription
  try {
    const newRecord = await pb.collection('JobNotifications').create({
      email,
      subscribed: true,
      created: new Date().toISOString(),
    });

    logger.info(`New subscription created for ${email}`);
    return res.json({ success: true, record: newRecord });
  } catch (error) {
    logger.error('Error creating subscription:', error);
    return res.status(500).json({ error: 'Failed to subscribe' });
  }
});

export default router;
