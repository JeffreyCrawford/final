
/* Initialize Sequelize */
const Sequelize = require('sequelize');
const sequelize = new Sequelize('grants', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

/* Sequelize authentication/connection testing */
sequelize
  .authenticate()
  .then(() => {
    console.log('SQL Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });