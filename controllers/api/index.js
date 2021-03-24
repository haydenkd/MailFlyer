const router = require('express').Router();
const flyerRoutes = require('./flyer-routes');
const userRoutes = require('./user-routes');

router.use('/flyer', flyerRoutes);
router.use('/user', userRoutes);

module.exports = router;