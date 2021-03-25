const sequelize = require('./config/connection');
const { Flyer, User, ContentType } = require('./models/');
const { insultFlyer, jokeFlyer, quoteFlyer} = require('./controllers/mailer/mailer');

function checkEmails(){
    // Flyer.findAll({
    //     include: [{
    //             model: User,
    //             as: 'owner',
    //             attributes: ['email']
    //         },
    //         {
    //             model: User,
    //             as: 'recipient',
    //             attributes: ['email']
    //         },
    //         {
    //             model: ContentType,
    //             attributes: ['type']
    //         }
    //     ]
    // })
    // .then(dbFlyerData => {
    //     console.log(dbFlyerData);
    //     const flyers = dbFlyerData.map(flyer => flyer.get({
    //         plain: true
    //     }));
    //     console.log('---------------------');
    //     console.log(flyers);
    // })
    // .catch(err => {
    //     console.log(err);
    // });

    for (let i = 0; i < flyers.length; i++){
        if(flyers[i].flyer_type === 1){
            quoteFlyer(flyers[i].dataValues.recipient);
        }
    
        if(flyers[i].flyer_type === 2){
            jokeFlyer(flyers[i].dataValues.recipient);
        }
    
        if(flyers[i].flyer_type === 3){
            insultFlyer(flyers[i].dataValues.recipient);
        }
    }

}

var timer = setInterval(checkEmails, 1000);