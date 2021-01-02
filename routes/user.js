const express = require('express');
const {
  userById,
  allUsers,
  getUser,
  updateUser,
  deleteUser,
  userPhoto,
  addFollowing,
  addFollower,
  removeFollowing,
  removeFollower,
  findPeople,
  hasAuthorization,
} = require('../controllers/user');
const { requireSignin } = require('../controllers/auth');

const router = express.Router();

// @route   PUT api/user/follow
// @desc    Login user can follow another user
// @access  Private
router.put('/user/follow', requireSignin, addFollowing, addFollower);

// @route   PUT api/user/unfollow
// @desc    Login user can unfollow another user
// @access  Private
router.put('/user/unfollow', requireSignin, removeFollowing, removeFollower);

// @route   GET api/users
// @desc    Anyone can see all the users
// @access  Public
router.get('/users', allUsers);

// @route   GET api/user/:userId
// @desc    Login users profile
// @access  Private
router.get('/user/:userId', requireSignin, getUser);

// @route   PUT api/user/:userId
// @desc    Login user can update his profile
// @access  Private
router.put('/user/:userId', requireSignin, hasAuthorization, updateUser);

// @route   Delete api/user/:userId
// @desc    Login users can delete his profile
// @access  Private
router.delete('/user/:userId', requireSignin, hasAuthorization, deleteUser);

// @route   GET api/user/photo/:userId
// @desc    Anyone can get the photo of any specific user
// @access  Public
router.get('/user/photo/:userId', userPhoto);

// @route   GET api/user/findpeople/:userId
// @desc    Login users can find people to follow
// @access  Private
// who to follow
router.get('/user/findpeople/:userId', requireSignin, findPeople);

// any route containing :userId, our app will first execute userByID()
router.param('userId', userById);

module.exports = router;
