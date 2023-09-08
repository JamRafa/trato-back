const bodyParser = require("body-parser");
//const itens = require("../../models/itens");
const categorias = require("./categorias");
const itens = require("./itens");
const login = require("./login");
const session = require("./session");
const carrinho = require("./carrinho");

module.exports = (app) => {
  app.use(bodyParser.json(), categorias, itens, login, session, carrinho);
};
