const Quotes = require("randomquote-api");
const router = require("express").Router();
const { User } = require("../../models");

router.get("/", (req, res) => {
  try {
    const randomquote = Quotes.randomQuote();
    console.log(randomquote);
    res.json(randomquote);
  } catch (err) {
    console.log(error);
    res.status(500).json(err);
  }
});
router.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  if ((!username, !email, !password)) {
    return res.status(400).json({ message: "You did not give all info!" });
  }
  try {
    const newUser =await User.create({
      username,
      email,
      password,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Somehting wrong" });
  }

  res.end();
});

module.exports = router;
