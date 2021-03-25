const { ContentType } = require('../models');

const contentdata = [
  {
    type: 'Inspirational Quote',
    description: 'Send an inspirational email to friends.'
  },
  {
    type: 'Dad Joke',
    description: 'Send a dad joke to your friends'
  },
  {
    type: 'Insult Joke',
    description: 'Send something silly to your friends'
  }
];

const seedContentTypes = () => ContentType.bulkCreate(contentdata);

module.exports = seedContentTypes;