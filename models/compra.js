"use strict";
const { Model } = require("sequelize");
const cartoes = require("./cartoes");
module.exports = (sequelize, DataTypes) => {
  class Compra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Compra.belongsTo(models.Users, { foreignKey: "user_id" });
      Compra.belongsTo(models.itens, { foreignKey: "item_id" });
    }
  }
  Compra.init(
    {
      quantidade: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Compra",
    }
  );
  return Compra;
};
