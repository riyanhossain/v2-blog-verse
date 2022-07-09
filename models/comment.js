const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true,
    },
    userName: {
        type: String,
        required: true,
        default: 'Anonymous',
    },
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
    }
},{
    timestamps: true,
})

module.exports = mongoose.model('Comment', commentSchema);