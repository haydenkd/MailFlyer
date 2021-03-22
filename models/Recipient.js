const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipient extends Model {}

Recipient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    flyer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'flyer_list',
        key: 'id'
      }
    },
    recipient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'email_addresses',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'flyer_recipients'
  }
);

module.exports = Recipient;
