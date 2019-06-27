exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts', (posts) => {
        posts.increments();
        posts
        .string('name', 128)
        .notNullable()

        posts
        .text('description')
        .notNullable();

        posts
        .string('categories')
        .notNullable();
 
        posts
        .string('pictureUrl')
        .notNullable()

        posts
        .integer('artist_id')

        posts.timestamps(true,true)
      });
//       post: {
//         name: '',
//         description:'',**
//         categories: [],
//         pictureUrl: '',
//         artistID: '',**
//       }
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('posts');
  
};