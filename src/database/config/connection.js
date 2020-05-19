// Framework
const Sequelize = require("sequelize");

// Application
const env = process.env.NODE_ENV || "development";
const config = require("./index")[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
