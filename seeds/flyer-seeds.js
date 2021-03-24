const { Flyer } = require('../models');

const flyerdata = [
  {
    owner_id: 1,
    content_id: 2,
    recipient_id: 2,
    start_date: "2022-01-01",
    stop_date: "2022-01-03",
    frequency: 2,
    active: 1
  },
  {
    owner_id: 2,
    content_id: 2,
    recipient_id: 1,
    start_date: "2022-01-01",
    stop_date: "2022-01-03",
    frequency: 1,
    active: 1
  },
  {
    owner_id: 1,
    content_id: 2,
    recipient_id: 3,
    start_date: "2022-01-01",
    stop_date: "2022-01-03",
    frequency: 2,
    active: 1
  },
  {
    owner_id: 4,
    content_id: 2,
    recipient_id: 3,
    start_date: "2022-01-01",
    stop_date: "2022-01-03",
    frequency: 2,
    active: 1
  }
];

const seedFlyers = () => Flyer.bulkCreate(flyerdata);

module.exports = seedFlyers;