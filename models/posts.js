/// ------- initializations ------- \\\
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/// ------- schema ------- \\\
const postsSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

/// ------- exporting ------- \\\
const Posts = mongoose.model("Posts", postsSchema, "posts");
module.exports = Posts;