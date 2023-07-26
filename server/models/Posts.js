const mongoose = require('mongoose');

//schema for a blog post
const PostSchema = new mongoose.Schema({
    image: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
});

//model for the schema. 1stparam is name of cluster in DB, 2nd param is name of schema
const PostModel = mongoose.model("posts", PostSchema);

module.exports = PostModel;

