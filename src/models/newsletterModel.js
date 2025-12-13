import pool from '../db/db.js';

// Guardar email en newsletter
export const addNewsletterEmail = async (email) => {
  const [result] = await pool.query(
    'INSERT INTO newsletter (email) VALUES (?)',
    [email]
  );
  return result;
};

// Obtener todos los correos (opcional / admin)
export const getAllNewsletterEmails = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM newsletter ORDER BY created_at DESC'
  );
  return rows;
};
