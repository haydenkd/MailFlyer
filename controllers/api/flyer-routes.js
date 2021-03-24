const router = require('express').Router();
const { Comment, Flyer, Post, User } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth')

//GET==========================================================================================
//GET USER_ID this will be on the Dashboard 

router.get('/Flyer', (req, res) =>{
    Flyer.findAll ({
        attributes: 
        [
            'id',
            'name'
            [sequelize.literal('SELECT COUNT(*) FROM vote WHERE flyer.id = ]
        ]
    })
})
//POST==========================================================================================
//Create a new flyer 


//PUT==========================================================================================
// update the flyer and time/
// 


//DELETE==========================================================================================
// delete the fyler 