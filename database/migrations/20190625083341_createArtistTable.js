
exports.up = function(knex, Promise) {
    return knex.schema.createTable('artist', (artist) => {
        artist.increments();
        artist
        .string('name', 128)
        .notNullable()

        artist
        .string('lastname', 128)
        .notNullable()

        artist
        .string('username', 128)
        .notNullable()
        artist.string('password', 128)
             .notNullable();
        artist.string('description', 552)
             .notNullable();
        artist.timestamps(true,true)
      });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('artist');
  
};
