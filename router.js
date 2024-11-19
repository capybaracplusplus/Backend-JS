const {Router} = require('express');
const router = new Router();
const authRoutes = require('./routes/authRoutes');

router.use('/auth',authRoutes);


module.exports = router;