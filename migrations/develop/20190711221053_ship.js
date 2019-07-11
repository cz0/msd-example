exports.up = knex =>
  knex.schema.createTable("ships", table => {
    table
      .increments("id")
      .primary()
      .unique()
      .notNullable();
    table.string("name");
    table.integer("speed");
    table.timestamps(true, true);
  });

exports.down = knex => knex.schema.dropTableIfExists("ships");
