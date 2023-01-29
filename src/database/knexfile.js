require("dotenv").config();

/**
 * @type { Object.<string, import("knex").Knex.Config> };
 */
module.exports = {
  development: {
    client: "mysql",
    version: "5.7",
    connection: {
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE_NAME,
      port: process.env.DB_PORT,
    },
    migrations: {
      tableName: "lendsqr_migration",
    },
  },
  production: {
    client: "mysql",
    version: "5.7",
    connection: {
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE_NAME,
      port: process.env.DB_PORT
    },
  },
  testing: {
    client: "mysql",
    version: "5.7",
    connection: {
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE_NAME,
      port: process.env.DB_PORT,
    },
  },
};
