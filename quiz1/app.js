const express = require('express');
const logger = require('morgan');
const path = require('path');

const cookieParser = require('cookie-parser');
const methodOverride = require("method-override");
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger("dev"))
app.use(cookieParser());

app.set("view engine", "ejs")
app.set("views", "views")

app.use((req, res, next) => {
    res.locals.username = req.cookies.usernmae || ""
    next();
})
app.use(methodOverride((req, res) => {
    if(req.body && req.body._method) return req.body._method
}))

const home_router = require("./routes/home")
app.use("/", home_router)
const cluck_router = require("./routes/clucks")
app.use("/clucks", cluck_router)
const PORT = 9999
const DOMAIN  = 'localhost'
app.listen(PORT, DOMAIN, () => {
    console.log(`We are listen at http://${DOMAIN}:${PORT}`)
})