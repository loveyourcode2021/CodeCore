const express = require('express');
const logger = require('morgan');
const path = require('path');

const home_router = require("./routes/hangman_route")
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app')));
// app.use('./app', express.static(path.join('./app')));
app.use(logger("dev"))


app.set("view engine", "ejs")
app.set("views", "views")




app.use("/", home_router)

const PORT = 9900
const DOMAIN  = 'localhost'
app.listen(PORT, DOMAIN, () => {
    console.log(`We are listen at http://${DOMAIN}:${PORT}`)
}) 