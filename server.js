'use strict';

const express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  db = require('./config/db.js'),
  env = require('./config/env'),
  router = require('./routes/index');

const app = express();
const PORT = 3001;

const nodemailer = require("nodemailer")

let poolConfig = {
  pool: true,
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use TLS
  auth: {
      user: 'GrantProgramFinalProject',
      pass: 'hell0!hell0!'
  }
};

/* nodemailer */
let transporter = nodemailer.createTransport(poolConfig)

// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
       console.log(error);
  } else {
       console.log('Server is ready to take our messages');
  }
});


app.use(morgan('combined'));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

router(app, db);





var message = {
  sender: "Grant Management System",
  from: "GrantProgramFinalProject@gmail.com",
  to: 'jeffrey.a.crawford@gmail.com',
  subject: 'testing',
  text: '123',
};

transporter.sendMail(message)





db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('Express listening on port:', PORT);
  });
});