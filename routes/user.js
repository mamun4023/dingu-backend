const router = require("express").Router();
const userConttroller = require("../controllers/user");

router.post("/", userConttroller.addUser);
router.get("/", userConttroller.getUsers);
router.get("/:id", userConttroller.getUser);
router.put("/:id", userConttroller.updateUser);
router.delete("/:id", userConttroller.removeUser);

module.exports = router;
