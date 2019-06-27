exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('posts').insert([
        {
          id: 1,
          name: 'Peter',
          description: 'hahaha ahaha ',
          categories: 'hello',
          pictureUrl: 'wwwhwhw',
          artist_id: 1,
          heart: 0
        }
      ]);
    });
};
