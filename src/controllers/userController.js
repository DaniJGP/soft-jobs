const User = require('../models/User');
const jwt = require('jsonwebtoken');

const handleGetUsers = async (req, res) => {
    try {
        const Authorization = req.header('Authorization');
        const token = Authorization.split('Bearer ')[1];
        const { email } = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.get(email);
        res.send(user);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    handleGetUsers,
};
