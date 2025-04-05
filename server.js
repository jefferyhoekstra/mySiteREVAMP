/// ------- initializations ------- \\\
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const server = express();
const HomePosts = require("./models/homePosts");

const port = 3000;
const { DB_URI } = process.env;

//debug
console.log(DB_URI);

/// ------- middleware ------- \\\
server.use(express.static("public"));
server.set("view engine", "ejs");
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

/// ------- connection ------- \\\
mongoose
    .connect(DB_URI)
    .then(() =>
        server.listen(port, () => {
            console.log(`Connected to Database ${mongoose.connection.name}\nServer is listening on port ${port}`)
        })).catch((error) => console.log(error));

/// ------- routes ------- \\\

// index
server.get("/", async (request, response) => {
    let { page } = request.query;
    try {
        const HomePostsData = await HomePosts.find();
        console.log(HomePostsData);
        if (page === undefined)
        {
            page = "home";
        }
        response.render("layouts/main", { page, HomePostsData })
    } catch {
        response.status(500).send(`Error getting data`)
    }
})