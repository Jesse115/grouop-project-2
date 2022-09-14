const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("home");
});
router.get("/quotes", (req, res) => {
  res.render("quotes");
});
module.exports = router;
