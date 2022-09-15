// const session = require("express-session")

module.exports = {
  author: (req, res, next) => {
    if ((req.session.loggedIn)) {
      next();
    } else {
      res.status(500).json({ message: "Must be logged in" });
    }
  },
  withAuth: (req, res, next) => {
    console.log('Testing withAuth!!!!');
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      next();
    }
  }
};
