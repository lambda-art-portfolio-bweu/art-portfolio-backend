exports.up = function(knex, Promise) {
    return knex.schema.createTable('artist', (artist) => {
        artist.increments();
        artist
        .string('artistName', 128)
        .notNullable()

        artist.text('artistDescription', 255)
        .notNullable()
        
        artist
        .string('profilePictureUrl')
        .notNullable()
        
        artist
        .string('username', 128)
        .notNullable()

        artist
        .string('email', 128)
        .notNullable()

        artist.string('password', 128)
             .notNullable();
      
        artist.timestamps(true,true)
      });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('artist');
  
};