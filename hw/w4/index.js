
const express = require('express');
const logger = require('morgan');
const path = require('path');
const methodOverride = require("method-override");
const cookieParser = require('cookie-parser');
const mainRouter = require("./routes/main");
const cohortsRouter = require("./routes/cohorts");

const app = express();
app.set('view engine','ejs')

app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', 'views')
app.use(express.urlencoded({extended: true}))

app.use(methodOverride((req, res)=>{
    if(req.body && req.body._method) {
        const method = req.body._method;
        return method;
    }
}))

app.use(cookieParser())



app.use('/', mainRouter)
app.use('/cohorts', cohortsRouter)

const PORT = 4700;
const DOMAIN = "localhost"
app.listen(PORT, DOMAIN, (req, res) =>{
    console.log(` 💁 you have connected to http://${DOMAIN}:${PORT}`)
})