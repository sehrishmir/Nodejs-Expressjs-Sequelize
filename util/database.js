const Sequelize = require('sequelize');

const sequelize = new Sequelize("node-github", "root", "Lmis@123", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
