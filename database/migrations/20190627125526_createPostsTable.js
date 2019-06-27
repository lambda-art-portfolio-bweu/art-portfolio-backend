exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts', (posts) => {
        posts.increments();

        posts
        .string('name', 128)
        .notNullable()
        .unique()

        posts
        .text('description')
        .notNullable();

        posts
        .string('categories')
        .notNullable();
 
        posts.string('pictureUrl')
        .notNullable()

        posts
        .integer('artist_id')
        .unsigned()
        .notNullable()
        .references('id')

        posts
        .integer('heart')

        posts.timestamps(true,true)
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('posts');
  
};