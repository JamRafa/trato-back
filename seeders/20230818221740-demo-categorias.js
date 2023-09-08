/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categorias",
      [
        {
          nome: "Eletrônicos",
          thumbnail: "/assets/categorias/thumbnail/eletronicos.png",
          header: "/assets/categorias/header/eletronicos.png",
          descricao:
            "Os melhores e mais atuais dispositivos eletrônicos estão aqui!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categorias", null, {});
  },
};
