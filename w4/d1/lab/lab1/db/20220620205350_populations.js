/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('populations', table => {
        table.bigIncrements('id'); // creates a column called id with type of SERIAL fake primary key~~
        table.integer('year'); // creates a column called name with type of VARCHAR
        table.integer('quantity'); // creates a column called code with type of VARCHAR
        table.integer('country_id').unsigned();
        table.foreign('country_id').references("id").inTable("countries");
        //table.bigint('country_id').references('id').inTable('countries'); // creates a column called country_id with type of foreign key
        //table.foreign('country_id').references("id").inTable("countries");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('populations')
};
