import { addNewsletterEmail } from '../models/newsletterModel.js';

export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'El correo es obligatorio' });
    }

    await addNewsletterEmail(email);

    res.status(201).json({ message: 'Suscripción exitosa!' });

  } catch (error) {
    console.error(error);

    // Si el correo ya existe
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ message: 'Este correo ya está suscrito' });
    }

    res.status(500).json({ message: 'Error al suscribirse' });
  }
};
