const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
    }
},{
    timestamps: true,
})

module.exports = mongoose.model('Comment', commentSchema);