const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection");
const controllers = require ("./controllers");
const { User, Quote } = require ("./models");
const randomquotes = require("./controllers/api/quotesRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.send("Working");
});

app.use(randomquotes);

app.use(controllers);
sequelize.sync({force:true}).then(()=>{
  app.listen(PORT, () => console.log("we're doing it"));
});