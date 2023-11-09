'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const sq=require('../config/connection');
// console.log('data',sq.sequelize);
// console.log("end");
let db={};
fs.readdirSync(__dirname)
  .filter((file) => {
    console.log('inside',file);
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    console.log(file,"files");
    const model = require(path.join(__dirname, file))(sq.sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// console.log("database",db);



module.exports=db;


