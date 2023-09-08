const database = require("../../models");
const Sequelize = require("sequelize");

class CategoriasController {
  static async getAllCategories(req, res) {
    try {
      const allCategories = await database["categorias"].findAll();
      return res.status(200).json(allCategories);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = CategoriasController;
