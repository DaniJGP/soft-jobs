const pool = require('../database/pool');

const get = async (email) => {
    const consulta = 'SELECT * FROM usuarios WHERE email = $1';
    const valores = [email];
    const { rows } = await pool.query(consulta, valores);
    return rows;
};

module.exports = { get };
