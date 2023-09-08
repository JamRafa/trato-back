const { Router } = require("express");
const ItensController = require("../controllers/Itens");

const router = Router();
router.get("/allItens", ItensController.getAllItens);
router.get("/someItens/:itensId", ItensController.getSomeItens);

module.exports = router;
