const commentModel = require('../models/comment');
const blogModel = require('../models/blog');

const postComment = async (req, res) => {
    try {
        const blog = await blogModel.findById(req.body.blogId);
        if(blog){
            const comment = await commentModel.create({
                ...req.body,
            });
            blog.comments.push(comment);
            await blog.save();
            res.status(200).json({
                message: "Comment created",
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

module.exports = { postComment };