// MySQL

const Sequelize = require("sequelize");
const sequelize = new Sequelize("projecthms", "root", "godkrishna", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});

module.exports = sequelize;
