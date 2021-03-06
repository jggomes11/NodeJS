// Framework
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

// Application
const basename = path.basename(__filename);
const db = require("../config/connection"); //Database connection
const sequelize = db.sequelize;

fs.readdirSync(__dirname)
    .filter((file) => {
        return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
    })
    .forEach((file) => {
        const model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

module.exports = db;
