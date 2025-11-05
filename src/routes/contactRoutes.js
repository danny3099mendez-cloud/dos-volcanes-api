import { Router } from 'express';
import { sendMessage, listMessages } from '../controllers/contactController.js';

const router = Router();

// POST /api/contact → enviar mensaje
router.post('/', sendMessage);

// GET /api/contact → listar mensajes
router.get('/', listMessages);

export default router;
