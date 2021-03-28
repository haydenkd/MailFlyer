require('dotenv').config();
const nodemailer = require('nodemailer');
const fetch = require('node-fetch');
const quotes = require('../mailer/quotes');
/*
this is what the email object is meant to look like
let email = {
    to: "",
    subject: "New Flyer ✔",
    text: "This is a flyer.",
    html: "<b>This is a flyer.</b>"
}
*/

let transporter = nodemailer.createTransport({
    host: "schlocked.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "mailflyer@schlocked.com",
      pass: process.env.EMAIL_PASS,
    }
});

// send a flyer with a random meme from gfycat
async function jokeFlyer(recipient){
    var email = {
        to: recipient,
        subject: "New Flyer ✔",
        text: "",
        html: ""
    }

    fetch('https://icanhazdadjoke.com/',{
        method: "GET",
        headers: {
            "Accept": "application/json",
    }})
    .then(res => res.json())
    .then(data => {
        email.text = data.joke;
        email.html = `<b>${data.joke}<b>`;
        console.log(email);
        sendFlyer(email);
    })
    .catch(err => console.error(err));
}

// send a flyer with an inspirational quote attached
let quoteFlyer = function(recipient){
    var email = {
        to: recipient,
        subject: "New Flyer ✔",
        text: "",
        html: ""
    }

    var selection = (Math.floor(Math.random()) * (quotes.length - 1));
    email.text = quotes[selection];
    email.html = `<b>${quotes[selection]}<b>`;
    console.log(email);
    sendFlyer(email);
}

// send an insult flyer
async function insultFlyer(recipient){
    var email = {
        to: recipient,
        subject: "New Flyer ✔",
        text: "",
        html: ""
    }

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
    })
    .catch(err => console.error(err));;
}

module.exports = {
    insultFlyer,
    jokeFlyer,
    quoteFlyer
}