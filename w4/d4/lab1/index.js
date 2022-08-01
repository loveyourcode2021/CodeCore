const express = require('express');
const ejs = require('ejs');
const logger = require('morgan');
const cookie_parser = require("cookie-parser");
const path = require('path');
const app = express();
const req = require('express/lib/request');
const { response } = require('express');
const tasksRouter = require("./routes/tasks");

app.use(express.static(path.join(__dirname, 'public')));
app.set(logger('dev'));
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.get("/select", (req, res) => {
    const language = req.query.language
    const name = req.query.name;
    res.render('select',{
        language: language,
        name:name
    })
})
app.get('/', (request, response) => {
    response.render('index',{
        isOpen: false,
    })
})

const PORT = 4200;
const DOMAIN = "localhost"
app.listen(PORT, DOMAIN, () => {
    console.log(`connected to http://${DOMAIN}:${PORT}`)
})