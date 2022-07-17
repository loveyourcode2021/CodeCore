/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("test123", (t) => {
    t.bigIncrements("id");
    t.string("username");
    t.text("imageUrl");
    t.text("content");
    t.timestamp("createdAt").defaultTo(knex.fn.now());
    t.timestamp("updatedAt").defaultTo(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('test123')
};
