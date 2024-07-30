const router = require("express").Router();
const userRoutes = require("./user");
const addressRoutes = require("./address");
const bookRoutes = require("./book");

router.use("/user", userRoutes);
router.use("/address", addressRoutes);
router.use("/book", bookRoutes);

module.exports = router;
