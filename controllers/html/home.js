const router = require("express").Router();

router.get("/", async (req, res) => {
  const loggedIn = req.session.loggedIn;
  res.render("homepage",{
    loggedIn,
  });
});
router.get("/login", async (req, res) => {
  const loggedIn = req.session.loggedIn;
  res.render("login",{
    loggedIn,
  });
});
router.get("/quotes", (req, res) => {
  res.render("quotes");
});
module.exports = router;
