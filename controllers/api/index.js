const router = require("express").Router();
const quotesRouter = require("./quotesRoutes");


router.use("/user",quotesRouter);


module.exports = router;
