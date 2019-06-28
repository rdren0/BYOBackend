exports.up = function(knex) {
  return Promise.all([
    knex.schema.table('parks', function(table) {
      table.dropColumn('visitors');
    })
  ]);
};

exports.down = function(knex) {
 return Promise.all([
    knex.schema.table('parks', function(table) {
      table.integer('visitors');
    })
  ]);
};

 