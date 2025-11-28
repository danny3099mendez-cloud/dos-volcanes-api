import pool from '../db/db.js';

// Crear tabla si no existe
(async () => {
  try {
    const sql = `
      CREATE TABLE IF NOT EXISTS contact_messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    await pool.query(sql);
    console.log(' Tabla "contact_messages" verificada/creada');
  } catch (error) {
    console.error(' Error al crear tabla contact_messages:', error);
  }
})();

export const addContactMessage = async (name, email, message) => {
  const [result] = await pool.query(
    'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)',
    [name, email, message]
  );
  return result;
};

export const getAllMessages = async () => {
  const [rows] = await pool.query(
    'SELECT id, name, email, message, created_at FROM contact_messages ORDER BY created_at DESC'
  );
  return rows;
};
