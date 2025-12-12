import { Router } from 'express';
import { subscribeNewsletter } from '../controllers/newsletterController.js';

const router = Router();

// antes: router.post('/newsletter', subscribeNewsletter);
router.post('/', subscribeNewsletter);

export default router;
