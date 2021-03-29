const router = require('express').Router();
const sequelize = require('../config/connection');
const {
    User,
    Flyer,
    ContentType
} = require('../models');
const withAuth = require('../utils/auth');

//GET.findAll====================================================================================
router.get('/', withAuth, (req, res) => {
    Flyer.findAll({
            where: {
                owner_id: req.session.user_id
            },
            include: [{
                    model: User,
                    as: 'owner',
                    attributes: ['email']
                },
                // {
                //     model: User,
                //     as: 'recipient',
                //     attributes: ['email']
                // },
                {
                    model: ContentType,
                    attributes: ['type']
                }
            ]
        })
        .then(dbFlyerData => {
            console.log("\n\n\nNEW DATA\n\n\n");

            let dashboardData = [];
            for (var i = 0; i < dbFlyerData.length; i++)
            {
                var freq;
                if (parseInt(dbFlyerData[i].frequency) === 1)
                {
                    freq = "Daily";
                }
                else if (parseInt(dbFlyerData[i].frequency) === 7)
                {
                    freq = "Weekly";
                }
                else
                {
                    freq = "Monthly";
                }
                dashboardData.push({
                    id: dbFlyerData[i].dataValues.id,
                    recipient: dbFlyerData[i].dataValues.recipient,
                    type: dbFlyerData[i].dataValues.flyer_type.dataValues.type,
                    schedule: freq
                })
            }
            console.log(dashboardData);
            console.log("\n\n\nNEW DATA\n\n\n");
            // const flyers = dbFlyerData.map(flyer => flyer.get({
            //     plain: true
            // }));
            // console.log(flyers);
            res.render('dashboard', {
                dashboardData,
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/create', withAuth, (req, res) => {
    res.render('create-flyer');
});

module.exports = router;