const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Salle = sequelize.define('Salle', {
    NumS: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    NomS: DataTypes.STRING,
    AdresseS: DataTypes.STRING,
    VilleS: DataTypes.STRING
  }, {
    tableName: 'Salles',
    timestamps: true,
  });

  Salle.associate = function(models) {
    Salle.hasMany(models.Inscrire, { foreignKey: 'NumS' });
  };

  return Salle;
};
