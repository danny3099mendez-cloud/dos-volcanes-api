import pool from '../db/db.js'; // conexión

export const addNewsletterEmail = async (email) => {
  const [result] = await pool.query(
    'INSERT INTO newsletter (email) VALUES (?)',
    [email]
  );
  return result;
};

export const getAllNewsletterEmails = async () => {
  const [rows] = await pool.query('SELECT * FROM newsletter ORDER BY created_at DESC');
  return rows;
};
