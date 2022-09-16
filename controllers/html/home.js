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
  const loggedIn = req.session.loggedIn;
  res.render("quotes", {
    loggedIn,
  });
});

//removed async from diary line put back if necessary
router.get("/diary", (req, res) => {
  const loggedIn = req.session.loggedIn;
  if (loggedIn) {
    res.render("homepage", {
      loggedIn,
    });
  }
});



module.exports = router;
