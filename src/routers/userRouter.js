const { Router } = require('express');
const { handleGetUsers } = require('../controllers/userController');

const router = Router();
// User authorization
router.get('/usuarios', handleGetUsers);

module.exports = router;
