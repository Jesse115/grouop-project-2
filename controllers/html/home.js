const router = require("express").Router();

router.get("/", async (req, res) => {
  const loggedIn = req.session.loggedIn;
  res.render("home",{
    loggedIn,
  });
});
router.get("/login", async (req, res) => {
  const loggedIn = req.session.loggedIn;
  res.render("login",{
    loggedIn,
  });
});
module.exports = router;
