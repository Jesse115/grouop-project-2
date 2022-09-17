// const Quotes = require("randomquote-api");
const router = require("express").Router();
const { Diary } = require("../../models");
const { author } = require("../../utils");

router.post("/", author, async (req, res) => {
  const { title} = req.body;
  const diaryId = req.body.text;
  const UserId = req.session.userId;

  try {
    const newDiary = await Diary.create({
      title,
      diaryId,
      UserId,

    });
    res.json(newDiary);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something wrong" });
}
});

router.get("/", async(req, res) => {
  try
  {
    const diaryData = await Diary.findAll();
    res.status(200).json(diaryData);
  } catch(err){
    console.log(error);
    return res.status(500).json({ message: "Something wrong" });
  }
});

module.exports = router;
