const router = require('express').Router();

const flyerRoutes = require('./flyer-routes.js');

router.use('/flyer', flyerRoutes);

module.exports = router;
