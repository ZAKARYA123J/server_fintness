'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Inscrires', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      NumM: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Membres',
          key: 'NumM',
        },
        unique: true,
      },
      NumS: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Salles',
          key: 'NumS',
        },
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
    await queryInterface.dropTable('Inscrire');
  },
};
