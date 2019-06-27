
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('posts').del()
      .then(function () {
        // Inserts seed entries
        return knex('posts').insert([
          {id: 1,         
             name: 'Flying Spur',
             description:'This Post is the bomb the good bad things done out here',
             categories: 'flowers',
             pictureUrl: '',
             artistID: 9,
             heart:3
          },
          {id:2 ,         
            name: 'HotSpring',
            description:'Its hot but cold at the same time',
            categories: [],
            pictureUrl: '',
            artistID: 1,
            heart:5
         },
         {id:3 ,         
          name: 'HotSpring',
          description:'Its hot but cold at the same time',
          categories: [],
          pictureUrl: '',
          artistID: 1,
          heart:5
       },
        {id:4 ,         
          name: 'Summer',
          description:'Its hot but cold at the same time',
          categories: [],
          pictureUrl: '',
          artistID: 2,
          heart:1
         }
  
        ]);
      });
  };