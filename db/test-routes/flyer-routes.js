const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Flyer, ContentType } = require('../../models');

const d = new Date();

// get all flyers
router.get('/', (req, res) => {
  Flyer.findAll({
    include: [
        {
          model: User,
          as: 'owner',
          attributes: ['email']
        },
        {
          model: User,
          as: 'recipient',
          attributes: ['email']
        },
        {
          model: ContentType,
          attributes: ['type']
        }
      ]
  })
    .then(dbFlyer => {
      res.json(dbFlyer);
  });
});

// create flyer
router.post('/', (req, res) => {
  Flyer.create({
    owner_id: req.body.owner_id,
    content_id: req.body.content_id,
    recipient_id: req.body.recipient_id,
    start_date: req.body.start_date,
    stop_date: req.body.stop_date,
    frequency: req.body.frequency,
    active: req.body.active
  })
    .then(dbFlyer => {
      res.json(dbFlyer);
  });
});

// get single flyer by ID
router.get('/:id', (req, res) => {
  Flyer.findOne({
    where: {
      id: req.params.id
    }
  }).then(dbFlyer => {
    res.json(dbFlyer);
  });
});

// Update flyer by ID
router.put('/:id', (req, res) => {
  Flyer.update({
      content_id: req.body.content_id,
      start_date: req.body.start_date,
      stop_date: req.body.stop_date,
      prev_flyer_date: req.body.prev_flyer_date,
      frequency: req.body.frequency,
      active: req.body.active
    },
    {
    where: {
      id: req.params.id
    }
  }).then(dbFlyer => {
    res.json(dbFlyer);
  });
});

// Set previous flyer date
router.put('/prev/:id', (req, res) => {
  Flyer.update({
      prev_flyer_date: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
    },
    {
    where: {
      id: req.params.id
    }
  }).then(dbFlyer => {
    res.json(dbFlyer);
  });
});

// Delete flyer by ID
router.delete('/:id', (req, res) => {
  Flyer.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbFlyer => {
    res.json(dbFlyer);
  });
});

module.exports = router;
