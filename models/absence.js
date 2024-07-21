'use strict';

module.exports = (sequelize, DataTypes) => {
  const Absence = sequelize.define('Absence', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    dateAbsence: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('absent', 'present'),
      allowNull: false,
      defaultValue: 'absent',
    },
    numM: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Membres', // Ensure 'Membres' is the correct table name
        key: 'NumM',
      },
      allowNull: false,
    },
    IDadmin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Admin',
          key: 'id',
        },
      },
  }, {
    tableName: 'Absences',
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  });

  Absence.associate = (models) => {
    Absence.belongsTo(models.Membre, { foreignKey: 'numM' });
    Absence.belongsTo(models.Admin,{foreignKey:'IDadmin'})
  };

  return Absence;
};
