const seedContentTypes = require('./content-type-seeds');
const seedFrequencies = require('./frequency-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedContentTypes();
  console.log('--------------');

  await seedFrequencies();
  console.log('--------------');

  process.exit(0);
};

seedAll();