// const Quotes = require("randomquote-api");
const router = require("express").Router();
const { Diary } = require("../../models");
const { auth } = require("../../utils");

router.post("/", auth, async (req, res) => {
  const { title, author, quoteId } = req.body;
  const userId = req.session.userId;

  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something wrong" });
  }
});

module.exports = router;
