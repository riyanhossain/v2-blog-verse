const express = require('express');
const { createBlog, deleteBlog } = require('../controllers/blog');
const uploadImage = require('../middlewares/imageUpload');
const router = express.Router();

router.post('/create-blog', uploadImage.single("coverImage"), createBlog);

router.delete('/delete-blog/:id', deleteBlog);

module.exports = router;