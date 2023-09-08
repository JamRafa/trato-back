const database = require("../../models");
const Sequelize = require("sequelize");
const getTokenFromHeaders = require("../utils/getTokenFromHeaders");
const authService = require("../services/authServices");

class CarrinhoController {
  static async getAllCards(req, res) {
    const { id } = req.body;
    try {
      const allCategories = await database["Cartoes"].findAll({
        where: { user_id: Number(id) },
      });
      return res.status(200).json(allCategories);
    } catch (err) {
      return res.status(500).json(err.message);
    }
    //}
  }

  static async compraProdutos(req, res) {
    const { itensComprados, newCardValue, userId } = req.body;

    try {
      const insere = itensComprados.map(async (item) => {
        await database["Compra"].create({
          user_id: userId,
          item_id: item.id,
          quantidade: item.quantidade,
        });
      });

      const atualizaCartao = await database["Cartoes"].update(
        newCardValue.value,
        { where: { id: newCardValue.id } }
      );
      console.log(atualizaCartao);
      return res.status(200).json("dados inseridos com sucesso");
    } catch (erro) {
      console.log(erro);
    }
  }
  static async historicoCompras(req, res) {
    const { id } = req.body;
    try {
      const historico = await database["Compra"].findAll({
        where: { user_id: id },
        include: [
          {
            model: database["itens"], // Supondo que o nome do modelo é "itens"
            required: true, // Use "required: true" se desejar apenas as compras que têm um item associado
          },
        ],
      });
      res.status(200).json(historico);
    } catch (erro) {
      console.log(erro);
    }
  }
  static async adicionaCartao(req, res) {
    const { id, nome, valor } = req.body;
    try {
      const novoCartao = await database["Cartoes"].create({
        user_id: id,
        nome,
        valor,
      });
  
      // Recupere os dados do cartão recém-criado
      const cartaoCriado = await database['Cartoes'].findOne({
        where: { id: novoCartao.id }
      });
  
      res.status(200).json(cartaoCriado);
    } catch (erro) {
      console.log(erro);
      res.status(500).json({ erro: "Erro ao criar o cartão" });
    }
  }
}

module.exports = CarrinhoController;
