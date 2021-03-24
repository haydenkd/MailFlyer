const seedContentTypes = require('./content-type-seeds');
const seedUsers = require('./user-seeds');
const seedFlyers = require('./flyer-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedContentTypes();
  console.log('--------------');
  await seedUsers();
  console.log('--------------');
  await seedFlyers();
  console.log('--------------');

  process.exit(0);
};

seedAll();