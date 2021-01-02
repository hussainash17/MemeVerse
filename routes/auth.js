const express = require('express');
const {
  signup,
  signin,
  signout,
  forgotPassword,
  resetPassword,
} = require('../controllers/auth');

const { userSignupValidator, userSigninValidator } = require('../validator');
const { userById } = require('../controllers/user');

const router = express.Router();

// @route   POST api/signup
// @desc    Anyone can signup
// @access  Public
router.post('/signup', userSignupValidator, signup);

// @route   POST api/signin
// @desc    After registering, anyone can signin
// @access  Public
router.post('/signin', userSigninValidator, signin);

router.get('/signout', signout);

// password forgot and reset routes
// forgotPassword and resetPassword is not implemented yet
router.put('/forgot-password', forgotPassword);
router.put('/reset-password', resetPassword);

// any route containing :userId, our app will first execute userByID()
router.param('userId', userById);

module.exports = router;
