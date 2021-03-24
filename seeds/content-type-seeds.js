const { ContentType } = require('../models');

const contentdata = [
  {
    type: 'Inspirational',
    description: 'Send an inspirational email to friends.'
  },
  {
    type: 'Silly',
    description: 'Send something silly to your friends'
  },
];

const seedContentTypes = () => ContentType.bulkCreate(contentdata);

module.exports = seedContentTypes;