const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const flyerRoutes = require('./flyer-routes.js');

router.use('/user', userRoutes);
router.use('/flyer', flyerRoutes);

module.exports = router;
