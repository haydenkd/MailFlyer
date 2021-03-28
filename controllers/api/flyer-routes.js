require('dotenv').config({
    path: '../../.env'
});
const router = require('express').Router();
const {
    insultFlyer,
    jokeFlyer,
    quoteFlyer
} = require('../mailer/mailer');
const {
    User,
    Flyer,
    ContentType
} = require('../../models');
const withAuth = require('../../utils/auth')

//GET==========================================================================================
//GET all flyers

router.get('/', (req, res) => {
    console.log('======================');
    Flyer.findAll({
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
        .then(dbFlyerData => res.json(dbFlyerData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//GET==========================================================================================
//GET all flyers by usere ID
router.get('/user', (req, res) => {
    console.log('======================');
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
        .then(dbFlyerData => res.json(dbFlyerData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//POST==========================================================================================
//Create a new flyer 

router.post('/', withAuth, (req, res) => {
    console.log("\n\n\n");
    console.log(req.body);
    console.log("\n\n\n");
    Flyer.create({
            owner_id: req.session.user_id,
            content_id: req.body.type,
            // recipient_id: req.body.recipient_id,
            recipient: req.body.recipient,
            start_date: req.body.start_date,
            stop_date: req.body.stop_date,
            frequency: req.body.frequency,
            active: req.body.active
        })
        .then(dbFlyerData => {
            res.json(dbFlyerData);
            console.log("LOOK HERE");
            if (dbFlyerData.dataValues.content_id === "1") {
                quoteFlyer(dbFlyerData.dataValues.recipient);
            }

            if (dbFlyerData.dataValues.content_id === "2") {
                jokeFlyer(dbFlyerData.dataValues.recipient);
            }

            if (dbFlyerData.dataValues.content_id === "3") {
                insultFlyer(dbFlyerData.dataValues.recipient);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//PUT==========================================================================================
// update the flyer and time/
// 


//DELETE==========================================================================================
router.delete('/:id', withAuth, (req, res) => {
    Flyer.destroy({
            where: {
                id: req.params.id,
            }
        })
        .then(dbFlyer => {
            if (!dbFlyer) {
                res.status(404).json({
                    message: 'You have no FLYERS!!!!'
                });
                return;
            }
            res.json(dbFlyer);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;