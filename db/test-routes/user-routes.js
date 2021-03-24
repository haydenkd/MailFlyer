const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Flyer, ContentType } = require('../../models');

// get all users
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] },
  })
    .then(dbUser => {
      res.json(dbUser);
  });
});

// create user
router.post('/', (req, res) => {
  User.create({
    email: req.body.email,
    password: req.body.password,
    unsubscribed: req.unsubscribed
  })
    .then(dbUser => {
      res.json(dbUser);
  });
});

// get single user by ID
router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    }
  }).then(dbUser => {
    res.json(dbUser);
  });
});

// Update password by user ID
router.put('/:id', (req, res) => {
  User.update({
      password: req.body.password
    },
    {
    where: {
      id: req.params.id
    }
  }).then(dbUser => {
    res.json(dbUser);
  });
});

// Unsubscribe user by ID
router.put('/unsubscribe/:id', (req, res) => {
  User.update({
    unsubscribed: req.body.unsubscribed
    },
    {
    where: {
      id: req.params.id
    }
  }).then(dbUser => {
    res.json(dbUser);
  });
});

// Delete user by ID
router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbUser => {
    res.json(dbUser);
  });
});

module.exports = router;
