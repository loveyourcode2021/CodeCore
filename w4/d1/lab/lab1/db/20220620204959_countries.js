/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('countries', table => {
        table.bigIncrements('id'); // creates a column called id with type of SERIAL
        table.string('name'); // creates a column called name with type of VARCHAR
        table.string('code'); // creates a column called code with type of VARCHAR
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('countries')
};
