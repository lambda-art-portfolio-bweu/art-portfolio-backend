
exports.up = function(knex, Promise) {
    return knex.schema.createTable('artist', (artist) => {
        artist.increments();
    
        artist
          .references('id')
          .string('username', 128)
          .notNullable()
          .string('password', 128)
          .notNullable()
          .text('description')
          .notNullable()
          .string('date', 255)
          .timestamps(true,true)
      });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('artist');
  
};
