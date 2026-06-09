const auth = require('../../middleware/auth');
const rbac = require('../../middleware/rbac');
const repo = require('./repository');
const pool = require('../../config/db');

async function routes(fastify) {
  fastify.get('/', { preHandler: [auth] }, async (req) => {
    const { rows } = await pool.query(
      `SELECT m.id, m.title, m.description, m.meeting_date, m.start_time, m.end_time
       FROM meetings m
       WHERE m.deleted_at IS NULL
       ORDER BY m.meeting_date DESC, m.start_time DESC`
    );
    return rows;
  });

  fastify.post('/', { preHandler: [auth, rbac('ADMIN','SENIOR_TL','TL')] }, async (req) => {
    const { title, description, meetingDate, startTime, endTime } = req.body;
    const { rows: [meeting] } = await pool.query(
      `INSERT INTO meetings (title, description, meeting_date, start_time, end_time, created_by)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [title, description, meetingDate, startTime, endTime, req.user.id]
    );
    return meeting;
  });

  fastify.delete('/:id', { preHandler: [auth, rbac('ADMIN','SENIOR_TL')] }, async (req) => {
    await pool.query('UPDATE meetings SET deleted_at = NOW() WHERE id = $1', [req.params.id]);
    return { message: 'Deleted' };
  });
}

module.exports = routes;