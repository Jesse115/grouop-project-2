const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers });


const app = express();
const PORT = process.env.PORT || 3001;
const { sequelize, SessionConfig } = require("./config/connection");
const controllers = require("./controllers");
const { User, Quote } = require("./models");
const randomquotes = require("./controllers/api/quotesRoutes");

app.use(session(SessionConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  res.render("homepage");
});

app.use(randomquotes);

app.use(controllers);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("we're doing it"));
});
