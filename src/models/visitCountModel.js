import pool from '../db/db.js';

// Crear tabla si no existe
(async () => {
  try {
    const sql = `
      CREATE TABLE IF NOT EXISTS visit_count (
        id INT PRIMARY KEY DEFAULT 1,
        count INT DEFAULT 0
      )
    `;
    await pool.query(sql);

    // Insertar fila inicial si no existe
    const [rows] = await pool.query('SELECT * FROM visit_count WHERE id = 1');
    if (rows.length === 0) {
      await pool.query('INSERT INTO visit_count (id, count) VALUES (1, 0)');
      console.log(' Tabla "visit_count" inicializada');
    } else {
      console.log(' Tabla "visit_count" verificada');
    }
  } catch (error) {
    console.error(' Error al crear tabla visit_count:', error);
  }
})();

export const getVisitCount = async () => {
  const [rows] = await pool.query('SELECT count FROM visit_count WHERE id = 1');
  return rows[0]?.count || 0;
};

export const incrementVisitCount = async () => {
  await pool.query('UPDATE visit_count SET count = count + 1 WHERE id = 1');
  const count = await getVisitCount();
  return count;
};
