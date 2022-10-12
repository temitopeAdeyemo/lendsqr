const knex = require("../knexfile");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  try {
    await knex.schema.hasTable("account").then(async (exists) => {
      if (!exists) {
        await knex.schema
          .createTable("account", async (table) => {
            table.increments("account_id").primary();
            table.string("account_number").notNullable();
            table.string("bank_name").defaultTo("LENDSQR_BANK");
            table.integer("balance").defaultTo(0.0);
            table.string("pin").defaultTo("1234");
            table
              .integer("user_id")
              .unsigned()
              .references("user.id")
              .notNullable();
            table.timestamp("created_at").defaultTo(knex.fn.now());
            table.timestamp("updated_at").defaultTo(knex.fn.now());
          })
          .then(() => {
            console.log("User Account Table created Successfully");
          })
          .catch((err) => console.log(err));
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("account");


// const knex = require("../knexfile");

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.up = async (req, res) => {
//   await knex.schema
//     .createTable("account", async (table) => {
//       table.increments("id");
//       table.string("account_number").notNullable();
//       table.string("bank_name").defaultTo("LENDSQR_BANK");
//       table.decimal("balance", 10, 2).defaultTo(0.0);
//       table.string("pin").defaultTo("1234");
//       table.integer("user_id").unsigned().references("user.id").notNullable();
//       table.timestamp("created_at").defaultTo(knex.fn.now());
//       table.timestamp("updated_at").defaultTo(knex.fn.now());
//     })
//     .then(() => {
//       console.log("User Account Table created Successfully");
//     })
//     .catch((err) => console.log(err));
// };

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.down = (knex) => knex.schema.dropTable("account");
