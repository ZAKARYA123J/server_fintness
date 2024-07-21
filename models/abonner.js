'use strict';

const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Abonner = sequelize.define('Abonner', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    datedebut: {
      type: DataTypes.DATE,
      allowNull: false
    },
    datefin: {
      type: DataTypes.DATE,
      allowNull: false
    },
    NumM: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Membres',
        key: 'NumM'
      },
      unique: true
    },
    IDadmin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Admin',
        key: 'id',
      },
    },
    NumT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Type_abonner',
        key: 'id'
      },
      unique: true
    }
  }, {
    tableName: 'abonner',
    timestamps: false
  });

  Abonner.associate = function(models) {
    // Define associations here
    Abonner.belongsTo(models.Membre, { foreignKey: 'NumM', as: 'membre' });
    Abonner.belongsTo(models.Type_abonner, { foreignKey: 'NumT', as: 'type_abonnement' });
    Abonner.belongsTo(models.Admin,{foreignKey:'IDadmin'})
  };

  return Abonner;
};
