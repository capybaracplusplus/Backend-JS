const {Router} = require('express');
const router = new Router();
const authRoutes = require('././controllers/authController');

router.use('/auth',authRoutes);

module.exports = router;