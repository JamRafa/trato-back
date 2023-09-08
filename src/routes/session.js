const { Router } = require("express");
const SessionController = require("../controllers/Session");

const router = Router();
router.get("/verifySession", SessionController.verifySession);
router.get("/refresh", SessionController.refreshSession);

module.exports = router;
