# MailFlyer

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-green)
![node](https://img.shields.io/badge/node-14-green)
![nodemailer](https://img.shields.io/badge/nodemailer-6-blue)
![expressjs](https://img.shields.io/badge/express-4-blue)
![MySQL](https://img.shields.io/badge/MySQL-8-blue)

## Description

Keep in touch by sending your loved ones a inspirational quote, Dad joke, or silly insult!

Choose if they receive it daily, weekly, or monthly!

## Installation

First, install `Node.js 14` and `MySQL 8` or newer on your system. Then clone this repository and navigate to the local folder via command line. Next install the necessary packages with `npm install` at the root of local repository. See respective documentation in the links below.

* [Node](https://nodejs.org/en/)

* [Express](https://docs.npmjs.com/cli/v7/commands/npm-install)

* [Nodemailer](https://nodemailer.com/about/)

* [MySQL](https://dev.mysql.com/)

* [Sequelize](https://www.npmjs.com/package/sequelize)

## Database Setup

In MySQL, create a database by the name of `mailflyer_db`. Then create a .env file at the root of your local repository and paste in the below text, replacing ***your_username*** and ***your_password*** with your MySQL username and password.

```
DB_NAME='mailflyer_db'
DB_USER='your_username'
DB_PW='your_password'
```

Now seed the database by running the following command:

```
node seeds/index
```

## Usage

Start the server using the following command at the root of your local repository:

```
npm start
```

Once there server is running, you can now access the application by pasting the following address in your web browser.

```
localhost:3001
```

On the landing page you can create your account, and now you are all set to start creating flyers to send to friends and family.

## Questions

Direct questions to:

* 
