'use strict';
const {
  Model
} = require('sequelize');
const itens = require('./itens');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Users.hasMany(models.Compra, {foreignKey: "user_id"})
      Users.hasMany(models.Cartoes, {foreignKey: "user_id"})
    }
  }
  Users.init({
    nome: DataTypes.STRING,
    senha: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};