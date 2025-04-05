/// ------- initializations ------- \\\
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/// ------- schema ------- \\\
const homePostsSchema = new Schema ({
    postboxType: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: false,
    },
    subtitleImage: {
        type: [String],
        required: false,
    },
    subtitleImageSize: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    subDescription: {
        type: String,
        required: false,
    },
    techStack: {
        type: [String],
        required: true,
    },
    hashtags: {
        type: [String],
        required: true,
    },
    link: {
        type: Boolean,
        required: false,
    },
    isPinned: {
        type: Boolean,
        required: true,
    },
});

/// ------- exporting ------- \\\
const HomePosts = mongoose.model("HomePosts", homePostsSchema, "homePosts");
module.exports = HomePosts;