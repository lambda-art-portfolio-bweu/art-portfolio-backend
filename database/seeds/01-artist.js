exports.seed = function(knex, Promise) {
  const hashPassword = require('../../helpers/hashPassword');

  const hashPassword = hashPassword('123');
  // Deletes ALL existing entries
  return knex('artist').del()
    .then(function () {
      // Inserts seed entries
      return knex('artist').insert([
        {
          id:1,
          name:'Bank',
          lastname:'Nsy',
          username: 'Banknsy',
          password: hashPassword,            
          description: 'Bla bla blah bla blah cant be found'
        },
        {
          id:2,
          name:'Dwayne',
          lastname:'Peacock',
          username: 'lil dawyne',
          password: hashPassword,            
          description: 'My guy still mashing peacocks'       
        },
        {
          id:3,
          name:'five',
          lastname:'cent',
          username: '50 Dollar',
          password: hashPassword,            
          description: 'I dont know what you heard about me'
        }
      ]);
    });
};
