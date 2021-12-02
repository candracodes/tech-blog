const Sequelize = require('sequelize');

// Require package that will read environment variables
require('dotenv').config();

// This is required in order for heroku to work
const sequelize = process.env.JAWSDB_URL ?
  new Sequelize(process.env.JAWSDB_URL) :
  new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;