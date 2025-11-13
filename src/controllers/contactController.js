import { addContactMessage, getAllMessages } from '../models/contactModel.js';

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const result = await addContactMessage(name, email, message);

    res.status(201).json({
      message: 'Mensaje enviado correctamente',
      id: result.insertId,
    });
  } catch (error) {
    console.error(' Error al enviar mensaje de contacto:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const listMessages = async (req, res) => {
  try {
    const messages = await getAllMessages();
    res.status(200).json(messages);
  } catch (error) {
    console.error(' Error al obtener mensajes:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
