import { Router } from 'express';
import { subscribeNewsletter } from '../controllers/newsletterController.js';

const router = Router();

router.post('/newsletter', subscribeNewsletter);

export default router;
