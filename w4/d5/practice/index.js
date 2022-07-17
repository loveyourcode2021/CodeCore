
const express = require('express');
const path = require('path')
const app = express();
const logger = require('morgan');
const cookieParser = require('cookie-parser');
app.use(express.static(path.join(__dirname, 'public')));
app.set(logger('dev'));
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
const PORT = 7000;
const DOMAIN = 'localhost';

app.use((req, res, next) => {
    const username = req.cookies.username;
    res.locals.username = '';
    if(username){
        res.locals.username = username;
        console.log(`Signed in ${username}`);
    }
    next();
})

app.post('/sign_in', (req, res) => {
    const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 
    console.log("trying to sign in ", req.body.username)
    const username = req.body.username
    res.cookie('username', username, {maxAge: COOKIE_MAX_AGE})
    res.redirect('/')
})

app.post(`/sign_out`, (req, res) => {
    res.clearCookie('username');
    res.redirect('/')
})




app.get('/survey', (req, res) =>{
    //res.send("HI")
    res.render('survey');
})

app.get('/submit', (req, res, next) => {
    const fullName = req.query.fullName;
    const favouriteColour = req.query.favouriteColour;
    const favouriteDay = req.query.favouriteDay;
    const message = req.query.message;

    res.render("thank_you", {
        fullName : fullName,
        favouriteColour : favouriteColour,
        favouriteDay : favouriteDay,
        message : message,
    })
})

app.get('/', (req, res) =>{
    //res.send("HI")
    res.render('welcome',
     {
        title: 'Welcome to Our Meme Page',
        memes:[
            "https://www.probytes.net/wp-content/uploads/2018/01/2.jpg",
            "https://www.probytes.net/wp-content/uploads/2018/01/20.png",
            "https://www.probytes.net/wp-content/uploads/2018/01/r_389776_tqMPa-1.jpg",
            "https://www.loginradius.com/blog/async/static/ce430bf1882a235044353d4b4d098275/e85cb/12.png",
            "https://res.cloudinary.com/practicaldev/image/fetch/s--MOKp0Jew--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.probytes.net/wp-content/uploads/2018/01/4-1.png"
        ]
     });
})

app.listen(PORT, DOMAIN, () => {
    console.log(`Server is listening on http://${DOMAIN}:${PORT}`)
})