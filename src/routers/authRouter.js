const { Router } = require('express');
const { handleRegister, handleLogin } = require('../controllers/authController');

const router = Router();
// User authorization
router.post('/usuarios', handleRegister);
router.post('/login', handleLogin);

module.exports = router;
