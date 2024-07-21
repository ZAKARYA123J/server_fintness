'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Absences', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      dateAbsence: {
        type: Sequelize.DATE,
        allowNull: false
      },
      numM: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Membres', // Make sure the 'Membres' table exists and the name is correct
          key: 'NumM'
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
        defaultValue: Sequelize.fn('now')
      },
      status: {
        type: Sequelize.ENUM('absent', 'present'),
        allowNull: false,
        defaultValue: 'absent'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Absences');
  }
};
