const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A post should contain a title.']
    },
    message: {
        type: String,
        require: [true, 'A post should have a message.']
    },
    creator: {
        type: String
    },
    tags : {
        type: [String]
    },
    selectedFile : String,
    likeCount : {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('postmessages', postSchema);

module.exports = PostMessage;