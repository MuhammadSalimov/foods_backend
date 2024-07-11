const router = require("../routes");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");
const homeRender = require("../home/home.render");
const model = (app, express) => {

  app.set("views engine" , "ejs")
  app.set("views" , path.join(__dirname , ".." , "views"))
  
  app.use(express.static(path.join(__dirname , ".." , "public")));
  app.use(express.urlencoded({extended:true})) 

  app.use(cookieParser())
  app.use(cors())
  app.use(express.json());

  app.use("/api", [router]);
  app.use("/" , homeRender)
};

module.exports = model;
