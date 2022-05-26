const Sequelize = require("sequelize");
const sequelize = require("../database/database");

//   Uncommenting when table changes are required

sequelize
	.sync({ alter: true })
	.then(() => {
		console.log("Tables Created");
	})
	.catch((error) => console.log(error, "error"));

// Connecting To Database
// sequelize
// 	.sync()
// 	.then(() => {
// 		console.log("Database");
// 	})
// 	.catch((error) => console.log(error, "error"));

// Sequelizing and Initializing Models
const UserModel = require("../models/User");
const User = UserModel(sequelize, Sequelize);

module.exports = { User };
