const database = require("../../models");

class ItensController {
  static async getAllItens(req, res) {
    const id = req.params;
    try {
      const allItens = await database["itens"].findAll();
      return res.status(200).json(allItens);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async getSomeItens(req, res) {
    const id = req.params;
    try {
      const allItens = await database["itens"].findAll({
        where: { categoria_id: id.itensId },
      });
      return res.status(200).json(allItens);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = ItensController;
