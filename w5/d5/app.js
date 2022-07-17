const express=  require("express");
const logger = require("morgan");
const path = require("path");
//const router = require("router");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

const app  = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));

app.set("view engine", "ejs");
app.set("views", "views")

app.use(cookieParser());

app.use((req,res,next)=>{

  console.log("i am app js")
  const username = req.cookies.username;
  res.locals.username = req.cookies.username || "";
  console.log("name",res.locals.username)
  next();
})
app.use(
    methodOverride((req, res) => {
      if (req.body && req.body._method) {
        const method = req.body._method;
        return method;
      }
    })
  );

const homeRouter = require("./router/main")
const clucksRouter = require("./router/cluckRoutes")
app.use("/", homeRouter )
app.use("/clucks", clucksRouter);
const PORT = 3000;
const DOMAIN = "localhost";
app.listen(PORT, DOMAIN, () => {
    console.log(`💁 Server is listening on http://${DOMAIN}:${PORT}`);
})