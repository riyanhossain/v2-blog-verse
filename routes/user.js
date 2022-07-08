const express = require('express');
const { userRegister, sentUserOTP, verifyOTP, userLogin } = require('../controllers/user');
const router = express.Router();

router.post('/register', userRegister, sentUserOTP);

router.post('/verify-otp', verifyOTP);

router.post('/login', userLogin);


module.exports = router;