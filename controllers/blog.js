const blogModel = require('../models/blog');
const fs = require('fs');

const createBlog = async (req, res) => {
    const newUrl = new URL(`${req.protocol}://${req.get("host")}`);
    try {
        req.body.coverImage = newUrl.origin + "/cover_images/" + req.file.filename;
        req.body.imageName= req.file.filename;
        const blog = await blogModel.create({
            ...req.body,
            // user: req.user._id,
        });
        res.status(200).json({
            message: "Blog created",
        });
    } catch (err) {
        console.log(err);
    }
}

const deleteBlog = async (req, res) => {
    try {
        const blog = await blogModel.findByIdAndDelete(req.params.id);
        if(blog){
            fs.unlinkSync(`public/cover_images/${blog.imageName}`);
            res.status(200).json({
                message: "Blog deleted",
            });
        }else{
            res.status(200).json({
                message: "Blog not found",
            });
        }
    } catch (err) {
        console.log(err);
    }
}

const updateBlog = async (req, res) => {
    try {
        const blog = await blogModel.findByIdAndUpdate(req.params.id, {
            ...req.body,
        });
        if(blog){
            res.status(200).json({
                message: "Blog updated",
            });
        }else{
            res.status(200).json({
                message: "Blog not found",
            });
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    createBlog,
    deleteBlog
}