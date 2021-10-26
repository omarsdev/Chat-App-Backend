const config = require("./app");

module.exports = {
  development: {
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbDatabase,
    host: config.dbHost,
    dialect: "postgres",
    logging: false,
  },
  test: {
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbDatabase,
    host: config.dbHost,
    dialect: "postgres",
    logging: false,
  },
  production: {
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbDatabase,
    host: config.dbHost,
    dialect: "postgres",
    logging: false,
  },
};
