import express from 'express';
import {
  subscribeNewsletter,
  listNewsletterEmails,
} from '../controllers/newsletterController.js';

const router = express.Router();

// Suscribirse
router.post('/', subscribeNewsletter);

// Listar correos (opcional)
router.get('/', listNewsletterEmails);

export default router;
