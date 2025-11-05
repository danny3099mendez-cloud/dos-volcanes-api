import { Router } from 'express';
import { getVisits, addVisit } from '../controllers/visitCountController.js';

const router = Router();

// GET /api/visit-count → obtener total de visitas
router.get('/', getVisits);

// POST /api/visit-count → incrementar contador
router.post('/', addVisit);

export default router;
