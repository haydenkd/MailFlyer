require('dotenv').config({path: '../.env'});
const nodemailer = require('nodemailer');
const fetch = require('node-fetch');

let email = {
    to: "haydenkdennison@gmail.com",
    subject: "New Flyer ✔",
    text: "This is a flyer.",
    html: "<b>This is a flyer.</b>"
}

let transporter = nodemailer.createTransport({
    host: "schlocked.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "mailflyer@schlocked.com",
      pass: process.env.EMAIL_PASS,
    }
});

// send an insult flyer
async function insultFlyer(email){
    fetch("https://www.evilinsult.com/generate_insult.php?type=plain&lang=en&_=1616109722882")
    .then(res => res.text())
    .then(insultText => {
        email.text = insultText;
        email.html = `<b>${insultText}<b>`;
        console.log(email);
        sendFlyer(email);
    })
    .catch(err => console.error(err));
}

//send a flyer with custom parameters for each email
let sendFlyer = function(email){
    transporter.sendMail({
        from: '"MailFlyer" <mailflyer@schlocked.com>', // sender address
        to: email.to, // list of receivers
        subject: email.subject, // Subject line
        text: email.text, // plain text body
        html: email.html, // html body
    });
}

insultFlyer(email);