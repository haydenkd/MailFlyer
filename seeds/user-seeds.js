const { User } = require('../models');

const userdata = [
  {
    email: 'bob@mail.com',
    password: 'password123',
    unsubscribed: 0
  },
  {
    email: 'tim@mail.com',
    password: 'password123',
    unsubscribed: 0
  },
  {
    email: 'amy@mail.com',
    password: 'password123',
    unsubscribed: 0
  },
  {
    email: 'jim@mail.com',
    password: 'password123',
    unsubscribed: 0
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;