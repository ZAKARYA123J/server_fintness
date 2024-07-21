const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Type_abonner = sequelize.define('Type_abonner', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    libelle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tarif: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    duree: {
      type: DataTypes.INTEGER,
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
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'type_abonner',
    timestamps: true,
  });

  // Define associations here if needed
  Type_abonner.associate = function(models) {
    // Example association
    Type_abonner.hasMany(models.Abonner, { foreignKey: 'id' });
  };

  return Type_abonner;
};
