const { Frequency } = require('../models');

const frequencydata = [
  {
    frequency: 'Daily.'
  },
  {
    frequency: 'Weekly'
  },
  {
    frequency: 'Monthly'
  },
  {
    frequency: 'Annually'
  }
];

const seedFrequencies = () => Frequency.bulkCreate(frequencydata);

module.exports = seedFrequencies;