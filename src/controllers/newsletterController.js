import {
  addNewsletterEmail,
  getAllNewsletterEmails,
} from '../models/newsletterModel.js';

// POST /api/newsletter
export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    // Validación básica
    if (!email) {
      return res.status(400).json({
        message: 'El correo electrónico es obligatorio',
      });
    }

    // Guardar en BD
    const result = await addNewsletterEmail(email);

    res.status(201).json({
      message: 'Correo suscrito correctamente',
      id: result.insertId,
    });
  } catch (error) {
    console.error(' Error al suscribir correo:', error);

    res.status(500).json({
      message: 'Error interno del servidor',
    });
  }
};

// GET /api/newsletter (opcional)
export const listNewsletterEmails = async (req, res) => {
  try {
    const emails = await getAllNewsletterEmails();
    res.status(200).json(emails);
  } catch (error) {
    console.error(' Error al obtener correos:', error);

    res.status(500).json({
      message: 'Error interno del servidor',
    });
  }
};
