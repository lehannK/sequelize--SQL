const Sequelize = require("sequelize");
const databaseConfig = require("./config");
const env = "development";

const { username, password, database, host, dialect, port } =
  databaseConfig[env];

const sequelize = new Sequelize({
  database,
  username,
  password,
  host,
  dialect,
  port,
});

module.exports = sequelize;
