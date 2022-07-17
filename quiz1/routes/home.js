const express = require('express');
const knex = require("../db/client");
const getHashTags = require('../helperFunction/helperfunction')
const router  = express.Router();


router.get("/", (req, res, next) => {
     const isSignIn = "username" in req.cookies
     console.log("hello")
     knex('clucks').orderBy('created_at', 'desc').then((data) => {
        console.log(data)
        result = ""
        data.forEach((element) => {
            result+= element.content.toString()
        })
        console.log(result)
        var freqMap = {};
        result.match(/#[\p{L}]+/ugi).forEach(function(w) {
            if (!freqMap[w]) {
                freqMap[w] = 0;
            }
            freqMap[w] += 1;
        });
        const hash_length = Object.keys(freqMap).length
        if(hash_length>0)
        {
            res.render('main',{isSignIn: isSignIn, cluckslist: data, isClucks : data.length>0, username:req.cookies.username||"", hashFreq: freqMap, hash_length: hash_length})
        }else{
            res.render('main',{isSignIn: isSignIn, cluckslist: data, isClucks : data.length>0, username:req.cookies.username||"", hash_length: 0})
        }
    
     })
})

router.get("/sign_in", (req, res, next) => {
    const COOKIE_MAX_AGE = 24 * 7 * 60 * 60 * 1000;

    const isSignIn = "username" in req.cookies
    res.render('main',{isSignIn: isSignIn, clucksList: [], isClucks : false})
})

router.post("/sign_in", (req, res, next) => {
    const COOKIE_MAX_AGE = 24 * 7 * 60 * 60 * 1000;
    res.cookie("username", req.body.username, {maxAge: COOKIE_MAX_AGE});
    const isSignIn = "username" in req.cookies
    res.redirect("/")
})

router.post("/sign_out", (req, res, next) => {
    res.clearCookie("username");
    res.redirect("/")
})




module.exports = router;