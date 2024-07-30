const router = require("express").Router();
const bookController = require("../controllers/book");

router.post("/", bookController.addBook);
router.get("/", bookController.getBooks);
router.get("/:id", bookController.getBook);
// router.put("/:id", bookController);
router.delete("/:id", bookController.removeBook);

module.exports = router;
