const router = require('express').Router();
const {
    User,
    Flyer,
    ContentType
} = require('../../models');
const withAuth = require('../../utils/auth')

//GET==========================================================================================
//GET USER_ID this will be on the Dashboard 

// router.get('/Flyer', (req, res) =>{
//     Flyer.findAll ({
//         attributes: 
//         [
//             'id',
//             'name'
//             [sequelize.literal('SELECT COUNT(*) FROM vote WHERE flyer.id = ]
//         ]
//     })
// })

//POST==========================================================================================
//Create a new flyer 

router.post('/', withAuth, (req, res) => {
    Flyer.create({
            owner_id: req.session.user_id,
            content_id: req.body.content_id,
            recipient_id: req.body.recipient_id,
            start_date: req.body.start_date,
            stop_date: req.body.stop_date,
            frequency: req.body.frequency,
            active: req.body.active
        })
        .then(dbFlyerData => res.json(dbFlyerData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//PUT==========================================================================================
// update the flyer and time/
// 


//DELETE==========================================================================================
// delete the fyler 

module.exports = router;