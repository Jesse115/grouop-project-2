// const Quotes = require("randomquote-api");
const router = require("express").Router();
const { Diary } = require("../../models");
const { author } = require("../../utils");

router.post("/", author, async (req, res) => {
  const { description, author, diaryId } = req.body;
  const UserId = req.session.userId;

  try {
    const newDiary = await Diary.create({
      author,
      description,
      diaryId,
      UserId,

    });
    res.json(newDiary);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something wrong" });
  }
});

module.exports = router;
