const signInController = require('../controllers/signInController');
const signUpController = require('../controllers/signUpController');
const authValidator = require('../middleware /registrationValidator');

const {Router} = require('express');
const router = new Router();

router.post('/sing-in', authValidator, signInController);
router.post('/sing-up', authValidator, signUpController);

module.exports = router;