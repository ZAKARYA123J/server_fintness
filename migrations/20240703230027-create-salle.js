'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Salles', {
      NumS: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      NomS: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      AdresseS: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CodePostalS: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      VilleS: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      IDadmin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Admin',
          key: 'id',
        },
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
    await queryInterface.dropTable('Salles');
  },
};
