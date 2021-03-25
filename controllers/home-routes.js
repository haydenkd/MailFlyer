const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Flyer, ContentType } = require('../models');

//GET====================================================================================
router.get('/', (req, res) => {
    console.log(req.session);

    res.render('homepage');
});

//GET.login====================================================================================
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});
//==========================================================================================================
//LOGOUT==================================================================================================
router.get('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});



module.exports = router;