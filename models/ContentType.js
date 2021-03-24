const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ContentType extends Model {}

ContentType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'flyer_type'
  }
);

module.exports = ContentType;
