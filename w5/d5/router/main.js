const express = require('express');
const knex = require("../db/client")
const router = express.Router();
const COOKIE_MAX_AGE = 24 * 7 * 60 * 60 * 1000;



router.get("/", (req, res, next) => {
  console.log("main show")
    knex("test123")
      .orderBy("createdAt", "desc")
      .then((clucksData) => {
        const data = [clucksData]
        let sign_in =  "username" in req.cookies
        let showLists = data.length > 0  && data !== undefined
   
        res.render("main", { clucks: showLists, clucksData: clucksData, sign_in: sign_in });
      });
});

router.get("/sign_in", (req, res, next) => {
  console.log("main sing in at get")
  //res.dir("/sign_in")
  //next()
  res.render("main", { clucks: false, clucksData: [], sign_in: false });
});


router.post("/sign_in", (req, res, next) => {
  console.log("main sing in at post")
  res.cookie("username", req.body.username, { maxAge: COOKIE_MAX_AGE });
  res.redirect("/");
});

router.post("/sing_out", (req, res, next) => {
  console.log("main sing out at post")
  res.clearCookie("username");
  res.redirect("/");
});

module.exports = router;