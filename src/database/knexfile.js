require("dotenv").config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgres",
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
    // client: "mysql",
    client: "postgresql",
    version: "5.7",
    connection: {
      host: process.env.dbHost,
      user: process.env.dbUser,
      password: process.env.dbPass,
      database: process.env.dbName,
      port: process.env.dbPort,
    },
  },
  testing: {
    // client: "mysql",
    client: "postgresql",
    version: "5.7",
    connection: {
      host: process.env.dbHost,
      user: process.env.dbUser,
      password: process.env.dbPass,
      database: process.env.dbName,
      port: process.env.dbPort,
    },
  },
};
