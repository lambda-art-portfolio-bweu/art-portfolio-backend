exports.seed = function(knex, Promise) {

  // Deletes ALL existing entries
  return knex('artist').del()
    .then(function () {
      // Inserts seed entries
      return knex('artist').insert([
        {
          id:1,
          artistName:'Rui Ninja',
          artistDescription: 'His camera skills are of a ninja',
          profilePictureUrl:'',
          username: 'ninja10',
          password: 'haha', 
          email:'rui@team10.com' 
        },
        {
          id:2,
          artistName:'Dwayne Peacock',
          artistDescription: 'My guy still chasing peacocks',
          profilePictureUrl:'',
          username: 'peacock27',
          password: 'haha', 
          email:'dwayne@team10.com'           
               
        },
        {
          id:3,
          artistName:'Ike Samurai',
          artistDescription: 'Likes katanas and a a very feisty samurai',
          profilePictureUrl:'',
          username: 'samurai10',
          password: 'haha', 
          email:'ike@team10.com' 
        }
      ]);
    });
};
