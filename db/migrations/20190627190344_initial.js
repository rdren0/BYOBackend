exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("states", function(table) {
      table.increments("id").primary();
      table.string("name");
      table.integer("population");
      table.integer("area");
      table.string("capital");
      table.timestamps(true, true);
    }),

    knex.schema.createTable("parks", function(table) {
      table.increments("id").primary();
      table.string("name");
      table.integer("area");
      table.string("visitors");
      table.integer("location_id").unsigned();
      table.foreign("location_id").references("states.id");
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable("parks"),
    knex.schema.dropTable("states")
  ]);
};
