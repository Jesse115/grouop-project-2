const router = require("express").Router();
const quotesRouter = require("./quotesRoutes");
const diaryRoutes = require("./diary");
const user=require("./userRoutes");



router.use("/diary",diaryRoutes);
router.use("/quotes", quotesRouter);
router.use("/user",user);
module.exports = router;
