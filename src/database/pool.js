const { Pool } = require('pg');

const pool = new Pool({
    allowExitOnIdle: true,
});

const getDate = async () => {
    const { rows } = await pool.query('SELECT NOW()');
    console.log(rows[0].now, ': Database connected');
};
getDate();

module.exports = pool;
