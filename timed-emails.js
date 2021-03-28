const sequelize = require('./config/connection');
const { Flyer, User, ContentType } = require('./models/');
const { insultFlyer, jokeFlyer, quoteFlyer} = require('./controllers/mailer/mailer');
const d = new Date();

function checkDate(frequency, lastDateString){
    let lastDay = (parseInt(lastDateString[8]) * 10) + parseInt(lastDateString[9]);
    let lastMonth = (parseInt(lastDateString[5]) * 10) + parseInt(lastDateString[6]);

    if (lastMonth === 02){ // 28 day month previously
        if ((28 - lastDay + d.getDate()) > parseInt(frequency)){
            return true;
        }
        return false;
    }

    if (lastMonth === 04 || lastMonth === 06 || lastMonth === 09 || lastMonth === 11){ // 30 day month previously
        if ((30 - lastDay + d.getDate()) > parseInt(frequency)){
            return true;
        }
        return false;
    }

    if ((31 - lastDay + d.getDate()) > parseInt(frequency)){
        return true;
    }
    return false;
}

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

        for (let i = 0; i < dbFlyerData.length; i++){
            // check to see if the last send date is past the frequency time
            if(checkDate(dbFlyerData[i].dataValues.frequency, dbFlyerData[i].dataValues.prev_flyer_date) === true){
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
                Flyer.update({
                    prev_flyer_date: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
                  }, {
                    where: {
                      id: dbFlyerData[i].dataValues.id
                    }
                })
            }
        }
    })
    .catch(err => {
        console.log(err);
    });
}

checkEmails();
var timer = setInterval(checkEmails, 1000*60*60*3);