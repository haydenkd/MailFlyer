// import all models
const User = require('./User');
const Flyer = require('./Flyer');
const Recipient = require('./Recipient');
const ContentType = require('./ContentType');
const Frequency = require('./Frequency');

// create associations
User.hasMany(Flyer, {
    foreignKey: 'owner_id'
});

Flyer.belongsTo(User, {
    foreignKey: 'owner_id',
    onDelete: 'SET NULL'
});

User.belongsToMany(Flyer, {
    through: Recipient,
    as: 'recipient',
    foreignKey: 'recipient_id',
    onDelete: 'SET NULL'
});

Flyer.belongsToMany(User, {
    through: Recipient,
    as: 'recipient',
    foreignKey: 'flyer_id',
    onDelete: 'SET NULL'
});

Recipient.belongsTo(User, {
    foreignKey: 'recipient_id',
    onDelete: 'SET NULL'
});

Recipient.belongsTo(Flyer, {
    foreignKey: 'flyer_id',
    onDelete: 'SET NULL'
});

Flyer.belongsTo(ContentType, {
    foreignKey: 'content_id',
    onDelete: 'SET NULL'
});

Flyer.belongsTo(Frequency, {
    foreignKey: 'freq_id',
    onDelete: 'SET NULL'
});

ContentType.hasMany(Flyer, {
    foreignKey: 'content_id',
    onDelete: 'SET NULL'
});

Frequency.hasMany(Flyer, {
    foreignKey: 'freq_id',
    onDelete: 'SET NULL'
});

module.exports = { User, Flyer, Recipient, ContentType, Frequency };
