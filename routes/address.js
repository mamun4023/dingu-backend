
const router = require("express").Router();
const addressConttroller = require("../controllers/address");

router.post("/", addressConttroller.addAddress);
router.get("/", addressConttroller.getAdresses);
router.get("/:id", addressConttroller.getAdress);
// router.put("/:id", addressConttroller.);
router.delete("/:id", addressConttroller.removeAddress);

module.exports = router;
