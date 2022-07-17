const express = require("express");
const router = express.Router();
const faker = require("faker");

router.get("/", (req, res) => {
  res.render("main");
});

module.exports = router;
