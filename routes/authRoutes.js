const authController = require('../controllers/authController');

const {Router} = require('express');
const router = new Router();
router.get('/auth', authController);


module.exports = router;