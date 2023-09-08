const { Router } = require("express");
const CarrinhoController = require("../controllers/Carrinho");

const router = Router();
router.post("/getCartoes", CarrinhoController.getAllCards);
router.post("/efetuaCompra", CarrinhoController.compraProdutos);
router.post("/historico", CarrinhoController.historicoCompras);
router.post("/adicionaCartao", CarrinhoController.adicionaCartao);

module.exports = router;
