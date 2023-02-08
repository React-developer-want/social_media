const express = require('express');
const posts = require('../controllers/posts.js');

const router = express.Router();

//ALL ROUTERS
router.route('/').get(posts.getAllPosts);
router.route('/').post(posts.createPost);

module.exports = router;