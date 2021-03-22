const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Frequency extends Model {}

Frequency.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'flyer_frequency'
  }
);

module.exports = Frequency;
