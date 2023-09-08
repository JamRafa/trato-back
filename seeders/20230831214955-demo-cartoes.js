"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "cartoes",
      [
        {
          user_id: 1,
          nome: "Visa platnum -r",
          valor: 2500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          nome: "Master card -m",
          valor: 900,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("cartoes", null, {});
  },
};
