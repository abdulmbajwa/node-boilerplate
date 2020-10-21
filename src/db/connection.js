const Sequelize = require("sequelize");

const accessEnv = require("../helpers/accessEnv");

const dbURI = accessEnv("DB_URI");

const sequelize = new Sequelize(dbURI, {
  logging: true,
});

module.exports = sequelize;
