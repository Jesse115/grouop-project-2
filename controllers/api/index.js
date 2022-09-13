const router = require("express").Router();
const quotesRouter = require("./quotesRoutes");
const diaryRoutes = require("./diary");


router.use("/user",quotesRouter);
router.use("/diary",diaryRoutes);

module.exports = router;
