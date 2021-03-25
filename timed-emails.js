const sequelize = require('./config/connection');
const { Flyer, User, ContentType } = require('./models/')

function checkEmails(){
    Flyer.findAll({
        include: [{
                model: User,
                as: 'owner',
                attributes: ['email']
            },
            {
                model: User,
                as: 'recipient',
                attributes: ['email']
            },
            {
                model: ContentType,
                attributes: ['type']
            }
        ]
    })
    .then(dbFlyerData => {
        console.log(dbFlyerData);
        const flyers = dbFlyerData.map(flyer => flyer.get({
            plain: true
        }));
        console.log('---------------------');
        console.log(flyers);
    })
    .catch(err => {
        console.log(err);
    });
}

var timer = setInterval(checkEmails, 1000);