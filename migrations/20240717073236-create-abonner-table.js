'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('abonner',{
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      datedebut:{
        type:Sequelize.DATE,
        allowNull:false
      },
      datefin:{
        type:Sequelize.DATE,
        allowNull:false,
      },
      IDadmin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Admin',
          key: 'id',
        },
      },
      NumM:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Membres',
          key: 'NumM',
        },
        unique: true,
      },
      NumT:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Type_abonner',
          key: 'id',
        },
        unique: true,
      }
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
