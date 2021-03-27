const sequelize = require('./config/connection');
const { Flyer, User, ContentType } = require('./models/');
const { insultFlyer, jokeFlyer, quoteFlyer} = require('./controllers/mailer/mailer');
const d = new Date();

function checkEmails(){
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
    .then(dbFlyerData => {
        console.log(dbFlyerData[2].dataValues.recipient);

        for (let i = 0; i < dbFlyerData.length; i++){
            // check to see if the last send date is past the frequency time
            // if(dbFlyerData[i].dataValues)
            if(dbFlyerData[i].dataValues.content_id === 1){
                quoteFlyer(dbFlyerData[i].dataValues.recipient);
            }
        
            if(dbFlyerData[i].dataValues.content_id === 2){
                jokeFlyer(dbFlyerData[i].dataValues.recipient);
            }
        
            if(dbFlyerData[i].dataValues.content_id === 3){
                insultFlyer(dbFlyerData[i].dataValues.recipient);
            }
            // set the last send date to today
            // Flyer.update({
            //     prev_flyer_date: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
            //   }, {
            //     where: {
            //       id: dbFlyerData[i].dataValues.id
            //     }
            // })
        }
    })
    .catch(err => {
        console.log(err);
    });

}

var timer = setInterval(checkEmails, 1000*60*60*24);