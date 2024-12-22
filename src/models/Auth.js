const bcrypt = require('bcryptjs');
const pool = require('../database/pool');

const register = async ({ email, password, rol, lenguage }) => {
    const { rowCount } = await pool.query(
        'SELECT * FROM usuarios WHERE email = $1',
        [email]
    );
    if (rowCount !== 0) {
        throw { status: 400, message: 'Ya existe un usuario con ese email' };
    }

    const consulta = 'INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3, $4)';
    const hashedPassword = bcrypt.hashSync(password);
    const values = [email, hashedPassword, rol, lenguage];
    await pool.query(consulta, values);
};
const check = async ({ email, password }) => {
    const consulta = 'SELECT * FROM usuarios WHERE email = $1';
    const values = [email];
    const {
        rows: [usuario],
    } = await pool.query(consulta, values);

    if (!usuario) {
        throw { status: 401, message: 'Usuario o contraseña incorrecta' };
    }

    const { password: hashedPassword } = usuario;
    const passwordCorrect = bcrypt.compareSync(password, hashedPassword);
    if (!passwordCorrect) {
        throw { status: 401, message: 'Usuario o contraseña incorrecta' };
    }
    return;
};

module.exports = { register, check };
