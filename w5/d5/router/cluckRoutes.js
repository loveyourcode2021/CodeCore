const express = require("express");
const knex = require("../db/client");
const router = express.Router();
const COOKIE_MAX_AGE = 24 * 7 * 60 * 60 * 1000;
const faker = require("faker")

router.get("/", (req, res, next) => {
    console.log("I am trying 222")
    knex("test123")
    .orderBy("createdAt", "desc")
    .then((clucksData) => {
        res.render("test123/index", {clucksData: [clucksData]})
    });
})

router.get("/new", ((req, res, next) => {
    console.log("🖥 I am new at get")
    res.render("test123/new")
}))


router.post("/new", ((req, res, next) => {
    console.log("🖥 I am new at post")
    const contet = req.body.content || faker.lorem.words(10);
    const imageUrl = req.body.imageUrl || faker.image.imageUrl();

    knex("test123")
    .insert({
        username: req.cookies.username,
        content: contet,
        imageUrl: imageUrl
      }).then(() =>{ 
        res.redirect("/")
      })
   
   
}))


module.exports = router