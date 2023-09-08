'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class itens extends Model {
    associate(models) {
      // Defina o relacionamento com a tabela categorias
      itens.hasMany(models.compra, {foreignKey: "item_id"})
      itens.belongsTo(models.categorias, { foreignKey: 'categoria_id' });
    }
  }
  itens.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    foto: DataTypes.STRING,
    favorito: DataTypes.BOOLEAN,
    preco: DataTypes.FLOAT, // Use DataTypes.FLOAT para números decimais
    categoria_id: DataTypes.INTEGER // Coluna de chave estrangeira para a categoria
  }, {
    sequelize,
    modelName: 'itens',
  });
  return itens;
};
