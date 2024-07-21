const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Membre = sequelize.define('Membre', {
    NumM: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    NomM: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PrenomM: {
      type: DataTypes.STRING,
      allowNull: false
    },
    IDadmin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Admin',
        key: 'id',
      },
    },
    AdresseM: {
      type: DataTypes.STRING,
      allowNull: false
    },
    VilleM: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DateDeNaissanceM: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'Membres', // Ensuring the table name matches the migration script
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  });

  Membre.associate = function(models) {
    Membre.hasOne(models.Inscrire, { foreignKey: 'NumM' });
    Membre.hasMany(models.Abonner, { foreignKey: 'NumM' });
    Membre.belongsTo(models.Admin, { foreignKey: 'IDadmin' });
  };

  return Membre
}