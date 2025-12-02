import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Rutas
import visitCountRoutes from './routes/visitCountRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js'; // <<--- AQUI

dotenv.config();

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas principales
app.use('/api/visit-count', visitCountRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);  // <<--- AQUI

// Ruta base
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente ' });
});

export default app;

