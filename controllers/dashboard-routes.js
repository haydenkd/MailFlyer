const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Flyer, ContentType } = require('../models');
const withAuth = require('../utils/auth');

//GET.findAll====================================================================================
router.get('/', withAuth, (req, res) => {
    Flyer.findAll({
            where: {
                //USE THE ID FROM THE SESSION 
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
            console.log(dbFlyerData, 'WHERE ARE YOU DATA!!!!!!!!!!!!!'); //empty array so there is nothing to find - send it out 
            // where it get saved 
            const flyers = dbFlyerData.map(flyer => flyer.get({
                plain: true
            }));
            res.render('dashboard', {
                flyers,
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