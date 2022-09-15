const Quotes = require("randomquote-api");
const router = require("express").Router();
const { User } = require("../../models");

router.get("/random", (req, res) => {
  try {
    const randomquote = Quotes.randomQuote();
    console.log(randomquote);
    res.json(randomquote);
  } catch (err) {
    console.log(error);
    res.status(500).json(err);
  }
});
router.get("/",async(req,res)=>{
  if(req.session.loggedIn){
    return res.json({message:"You are in"});
  }else{
    return res.json({message:"You are out"});
  }
});

router.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  if ((!username, !email, !password)) {
    return res.status(400).json({ message: "You did not give all info!" });
  }
  try {
    const newUser = await User.create({
      username,
      email,
      password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = newUser.id;
      return res.status(201).json(newUser);
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Somehting wrong" });
  }

  // res.end();
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if ((!email, !password)) {
    return res.status(400).json({ message: "You did not give all info!" });
  }
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    const isValidPassword = user.checkPassword(password);

    if (isValidPassword) {
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userId = user.id;
        return res.status(200).json(user);
      });
    } else {
      res.status(404).json({ message: "Some of your info is incorrect" });
    }
    // res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something wrong" });
  }
});
router.post("/logout",async(req,res)=>{
  req.session.destroy(()=>{
    res.status(204).end();
  });
});

module.exports = router;
