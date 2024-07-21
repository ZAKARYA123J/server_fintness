const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Inscrire = sequelize.define('Inscrire', {
    NumM: {
      type: DataTypes.INTEGER,
      references: {
        model: "Membres", // Ensure 'Membres' is the correct table name
        key: "NumM"
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
    NumS: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Salles', // Ensure 'Salles' is the correct table name
        key: 'NumS'
      }
    }
  }, {
    tableName: 'Inscrire', // Explicitly set the table name
  });

  Inscrire.associate = function(models) {
    Inscrire.belongsTo(models.Membre, { foreignKey: 'NumM' });
    Inscrire.belongsTo(models.Salle, { foreignKey: 'NumS' });
    Inscrire.belongsTo(models.Admin,{foreignKey:'IDadmin'})
  };

  return Inscrire;
};
