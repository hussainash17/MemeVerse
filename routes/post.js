const express = require('express');
const {
  getPosts,
  createPost,
  postsByUser,
  postById,
  isPoster,
  updatePost,
  deletePost,
  photo,
  singlePost,
  like,
  unlike,
  comment,
  uncomment,
  updateComment,
} = require('../controllers/post');
const { requireSignin } = require('../controllers/auth');
const { userById } = require('../controllers/user');
const { createPostValidator } = require('../validator');

const router = express.Router();

// @route   GET api/posts
// @desc    Anyone can see all the photos
// @access  Public
router.get('/posts', getPosts);

// @route   PUT api/post/like
// @desc    Login user can like another users photo
// @access  Private
router.put('/post/like', requireSignin, like);

// @route   PUT api/post/unlike
// @desc    Login user can unlike another users photo
// @access  Private
router.put('/post/unlike', requireSignin, unlike);

// @route   PUT api/post/comment
// @desc    Login user can comment another users photo
// @access  Private
router.put('/post/comment', requireSignin, comment);

// @route   PUT api/post/uncomment
// @desc    Login user can remove his comment in another users photo
// @access  Private
router.put('/post/uncomment', requireSignin, uncomment);

// @route   PUT api/post/updatecomment
// @desc    Login user can update his comment in another users photo
// @access  Private
router.put('/post/updatecomment', requireSignin, updateComment);

// @route   POST api/post/new/:userId"
// @desc    Login user can share a new post
// @access  Private
router.post(
  '/post/new/:userId',
  requireSignin,
  createPost,
  createPostValidator
);

// @route   GET api/post/by/:userId"
// @desc    Login user can see his shared posts
// @access  Private
router.get('/posts/by/:userId', requireSignin, postsByUser);

// @route   GET api/post/:postId"
// @desc    Anyone can see single post
// @access  Public
router.get('/post/:postId', singlePost);

// @route   PUT api/post/:postId"
// @desc    Login user can update his post
// @access  Private
router.put('/post/:postId', requireSignin, isPoster, updatePost);

// @route   DELETE api/post/:postId"
// @desc    Login user can sdelete his post
// @access  Private
router.delete('/post/:postId', requireSignin, isPoster, deletePost);

// photo
router.get('/post/photo/:postId', photo);

// any route containing :userId, our app will first execute userById()
router.param('userId', userById);
// any route containing :postId, our app will first execute postById()
router.param('postId', postById);

module.exports = router;
