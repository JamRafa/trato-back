"use strict";
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable("itens", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      categoria_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "categorias", key: "id" },
      },
      titulo: {
        type: Sequelize.STRING,
      },
      descricao: {
        type: Sequelize.TEXT,
      },
      foto: {
        type: Sequelize.STRING,
      },
      favorito: {
        type: Sequelize.BOOLEAN,
      },
      preco: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable("itens");
  },
};
