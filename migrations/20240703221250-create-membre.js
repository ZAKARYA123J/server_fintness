'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Membres', {
      NumM: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      NomM: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      PrenomM: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      AdresseM: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      VilleM: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      DateDeNaissanceM: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Membres');
  },
};
