import { Router } from 'express';
import healthCheck from './health-check.js';
import githubRouter from './github.js';
import notificationsRouter from './notifications.js';

const router = Router();

export default () => {
    router.get('/health', healthCheck);
    router.use('/github/repos', githubRouter);
    router.use('/notifications', notificationsRouter);

    return router;
};
