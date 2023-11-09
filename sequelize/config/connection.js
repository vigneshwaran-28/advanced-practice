const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};
let sequelize;
// console.log(process.env[config.use_env_variable], config);
if (config.use_env_variable) {
  // console.log("ji");
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  // console.log("hidjjjd");
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}
console.log("startii");
module.exports = {sequelize,Sequelize};