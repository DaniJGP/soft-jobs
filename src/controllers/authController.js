const Auth = require('../models/Auth');
const jwt = require('jsonwebtoken');

const handleRegister = async (req, res, next) => {
    try {
        const { email, password, rol, lenguage } = req.body;
        await Auth.register({ email, password, rol, lenguage });
        res.json({ message: 'Usuario creado con éxito' });
    } catch (err) {
        next(err);
    }
};

const handleLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        await Auth.check({ email, password });
        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
            expiresIn: '2h',
        });
        res.json({ token });
    } catch (err) {
        next(err);
    }
};

module.exports = { handleRegister, handleLogin };
