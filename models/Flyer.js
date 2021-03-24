const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Flyer model
class Flyer extends Model {}

// create fields/columns for Flyer model
Flyer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'email_addresses',
        key: 'id'
      }
    },
    content_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'flyer_type',
        key: 'id'
      }
    },
    recipient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'email_addresses',
        key: 'id'
      }
    },
    start_date: {
      type: DataTypes.DATEONLY
    },
    stop_date: {
      type: DataTypes.DATEONLY
    },
    prev_flyer_date: {
      type: DataTypes.DATEONLY
    },
    frequency: {
      type: DataTypes.INTEGER,
    },
    active: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'flyer_list'
  }
);

module.exports = Flyer;
