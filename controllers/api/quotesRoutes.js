const Quotes = require("randomquote-api");
const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    const randomquote = Quotes.randomQuote();
    console.log(randomquote);
    res.json(randomquote);
  } catch (err) {
    console.log(error);
    res.status(500).json(err);
  }
});
router.post("/",async(req,res)=>{
  const {username,email,password}=req.body;
  if(!username,!email,!password){
    return res.status(400).json({message:"You did not give all info!"});
  }else{
    res.json({message:"you did it "});
  }
  console.log("You are the user route");
  res.end();
});

module.exports = router;
