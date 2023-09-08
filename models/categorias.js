'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categorias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      categorias.hasMany(models.itens, { foreignKey: 'categoria_id' })
    }
  }
  categorias.init({
    nome: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    header: DataTypes.STRING,
    descricao: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'categorias',
  });
  return categorias;
};