const router = require("express").Router();

router.get("/", async (req, res) => {
  const loggedIn = req.session.loggedIn;
  res.render("login", {
    loggedIn,
  });
});
router.get("/login", async (req, res) => {
  const loggedIn = req.session.loggedIn;
  res.render("login", {
    loggedIn,
  });
});
router.get("/quotes", (req, res) => {
  res.render("quotes");
});
router.get("/diary", async (req, res) => {
  const loggedIn = req.session.loggedIn;
  if (loggedIn) {
    res.render("homepage", {
      loggedIn,
    });
  }
  res.render("login", {
    loggedIn,
  });
});



module.exports = router;
