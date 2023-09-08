'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cartoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cartoes.belongsTo(models.Users, {foreignKey: "user_id"})
    }
  }
  Cartoes.init({
    nome: DataTypes.STRING,
    valor: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Cartoes',
  });
  return Cartoes;
};