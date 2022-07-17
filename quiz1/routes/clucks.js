const express = require('express');
const knex = require('../db/client')
const router = express.Router();
const faker = require("faker")
router.get("/", (req, res) => {
    
    console.log("clucks main")
  

    const isSignIn = "username" in req.cookies

    knex("clucks")
      .orderBy("created_at", "desc")
      .then((data) => {
        result = ""
      
        console.log(data)
   
            data.forEach((element) => {
              result+= element.content.toString()
          })
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
    
      });
   
});


router.get("/new", (req, res) => {
    console.log("clucks main")
    const isSignIn = "username" in req.cookies
    res.render("clucks/new", { isSignIn: isSignIn, cluckslist: [],isClucks : [].length>0, username:req.cookies.username||"" });   
});


router.post("/new", (req, res) => {
    
    console.log("clucks main")
    const username = req.cookies.username;
    const isSignIn = "username" in req.cookies
    const hashes = ["#kayle", "#chips", "#roosterjokes", "#greneggs","$tatooed","#letterpressed"]
    const loop = Math.random()*3    
    let result = [];
    for(let i = 0; i < loop; i++){
        let j  = Math.round(Math.random()*hashes.length)
        result.push(hashes[j] + " ")
    }
    let num = Math.round((Math.random() * 80) + 400);;
    knex("clucks")
      .insert({
        username:username,
        content:req.body.content|| result.join("")+faker.lorem.words(10),
        image_url:req.body.image_url || `http://placeimg.com/640/${num}`,
        })
      .then((cluckslist) => {
        res.redirect("/clucks");
      });
   
});


module.exports = router;