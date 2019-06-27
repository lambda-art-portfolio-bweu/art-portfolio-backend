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
        },
        {
          id: 5,
          name: 'Ironman',
          description: 'hahaha ahaha ',
          categories: 'hello',
          pictureUrl: 'wwwhwhw',
          artist_id: 1,
          heart: 0
        },
        {
          id: 6,
          name: 'Spider',
          description: 'hahahaah ',
          categories: 'hello',
          pictureUrl: 'wwwhwhw',
          artist_id: 1,
          heart: 8
        },
        {
          id: 7,
          name: 'Parker',
          description: 'hahaha ahaha ',
          categories: 'hello',
          pictureUrl: 'wwwhwhw',
          artist_id: 1,
          heart: 4
        }
      ]);
    });
};
