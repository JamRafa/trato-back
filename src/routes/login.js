const { Router } = require("express");
const LoginController = require("../controllers/Login");

const router = Router();
router.post("/login", LoginController.verifyLogin);
router.get("/getusers", LoginController.getUsers);

module.exports = router;
