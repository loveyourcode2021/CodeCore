const { application } = require('express');
const express = require('express');
const app = express();

const fn = (res, req, next) => {
   console.log("next 1")
   next();
}
const fn1 = (res, req, next) => {
    console.log("next 2")
    next();
    return;
    console.log("next 4")
 }

app.use('/', (req, res, next) => 
{
    console.log("call me babi")
    res.send("Hello World")
   
})

app.listen(2121, 'localhost', (req,res) => {
    console.log("listening at http://localhost:2121")
});