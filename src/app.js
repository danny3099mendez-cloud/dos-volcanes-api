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
app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:4000",
    "https://dosvolcanes-com.vercel.app"
  ],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

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

