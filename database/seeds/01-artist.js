const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artist').del()
    .then(function () {
      // Inserts seed entries
      return knex("artist").insert([
        {
          id: 1,
          artistName: "Rui Ninja",
          artistDescription: "He's a flex ninja!",
          profilePictureUrl:
            "http://image.noelshack.com/fichiers/2019/27/2/1562055851-capture-d-ecran-du-2019-07-02-10-23-48.png",
          username: "ninja10",
          email: "rui@team10.com",
          password: bcrypt.hashSync("ninja10", 10)
        },
        {
          id: 2,
          artistName: "Dwayne Peacock",
          artistDescription: "My guy still chasing peacocks",
          profilePictureUrl:
            "http://image.noelshack.com/fichiers/2019/27/2/1562056506-capture-d-ecran-du-2019-07-02-10-34-53.png",
          username: "peacock27",
          email: "dwayne@team10.com",
          password: bcrypt.hashSync("peacock27", 10)
        },
        {
          id: 3,
          artistName: "Ike Samurai",
          artistDescription: "Likes katanas and a a very feisty samurai",
          profilePictureUrl:
            "https://myanimeshelf.com/upload/dynamic/2011-01/17/afro-samurai_1638042.jpg",
          username: "samurai10",
          email: "ike@team10.com",
          password: bcrypt.hashSync("samurai10", 10)
        }
      ]);
    });
};
