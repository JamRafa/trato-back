const { Router } = require("express");
const CategoriaController = require("../controllers/Categorias");

const router = Router();
router.get("/allCategories", CategoriaController.getAllCategories);

module.exports = router;
