const express = require("express");
const app = express();
const PORT = process.env.port || 3001;

app.get('/', async (req, res) => {
    res.send("working");
});

app.listen(port, () => console.log("we're doing it"));
