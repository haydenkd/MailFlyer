const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { truncate} = require('./User');

class Flyer extends Model{
    static upvote(body, models){
        
    }
}