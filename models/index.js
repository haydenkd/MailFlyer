// import all models
const User = require('./User');
const Flyer = require('./Flyer');
const ContentType = require('./ContentType');

// create associations
User.hasMany(Flyer, {
    foreignKey: 'owner_id'
});

Flyer.belongsTo(User, {
    foreignKey: 'owner_id',
    onDelete: 'SET NULL'
});

Flyer.belongsTo(ContentType, {
    foreignKey: 'content_id',
    onDelete: 'SET NULL'
});

ContentType.hasMany(Flyer, {
    foreignKey: 'content_id',
    onDelete: 'SET NULL'
});

module.exports = { User, Flyer, ContentType };
