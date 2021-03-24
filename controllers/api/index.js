const router = require('express').Router();
// const flyerRoutes = require('./flyer-routes.js');
// const apiRoutes = require('');
const homeRoutes = require('../home-routes.js');
// const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);
// router.use('/create-flyer', flyerRoutes);
// router.use('/api', apiRoutes);


module.exports = router;