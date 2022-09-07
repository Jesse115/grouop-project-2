const Quotes = require("randomquote-api");
const router = require('express').Router();

router.get('/', (req, res) => {
    try {
        const randomquote = Quotes.randomQuote();
        console.log(randomquote);
        res.json(randomquote)
    }
    catch (err) {
        console.log(error);
        res.status(500).json(err);
    }
});

module.exports = router;