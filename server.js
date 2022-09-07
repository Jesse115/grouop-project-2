const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const randomquotes = require("./controllers/api/quotesRoutes");

app.use(randomquotes);
app.listen(PORT, () => console.log("we're doing it"));

