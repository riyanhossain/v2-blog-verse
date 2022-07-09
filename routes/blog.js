const express = require('express');
const { createBlog, deleteBlog, updateBlog, getAllBlogs, searchBlogs } = require('../controllers/blog');
const uploadImage = require('../middlewares/imageUpload');
const { verifyJwtToken } = require('../middlewares/verifyJwtToken');
const router = express.Router();

router.post('/create-blog', verifyJwtToken, uploadImage.single("coverImage"), createBlog);

router.delete('/delete-blog/:id',verifyJwtToken, deleteBlog);

router.patch('/update-blog/:id',verifyJwtToken, uploadImage.single("coverImage"), updateBlog);

router.get('/get-blogs', getAllBlogs);

router.get('/search-blogs', searchBlogs);

module.exports = router;