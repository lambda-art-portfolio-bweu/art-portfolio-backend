exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("posts").insert([
        {
          id: 1,
          name: "Night Bridge",
          description: "",
          categories: "art",
          pictureUrl: "https://picsum.photos/id/122/1920/1080.jpg",
          artist_id: 2,
          heart: 5
        },
        {
          id: 2,
          name: "Low Friction",
          description: "",
          categories: "abstract art",
          pictureUrl: "https://picsum.photos/id/123/1920/1080.jpg",
          artist_id: 2,
          heart: 15
        },
        {
          id: 3,
          name: "Winter Capital",
          description: "Paris. Enough said.",
          categories: "art",
          pictureUrl: "https://picsum.photos/id/420/1920/1080.jpg",
          artist_id: 2,
          heart: 50
        },
        {
          id: 4,
          name: "Summer almost gone",
          description: "But we are still here, today.",
          categories: "art",
          pictureUrl: "https://picsum.photos/id/65/1920/1080.jpg",
          artist_id: 2,
          heart: 35
        },
        {
          id: 5,
          name: "Deep Dive",
          description: "I don't fear the darkness",
          categories: "art sport",
          pictureUrl: "https://picsum.photos/id/541/1920/1080.jpg",
          artist_id: 3,
          heart: 42
        },
        {
          id: 6,
          name: "Oh when the moutain",
          description:
            "Snow makes everything quiet, and mountain makes us humble.",
          categories: "sport art",
          pictureUrl: "https://picsum.photos/id/256/1920/1080.jpg",
          artist_id: 3,
          heart: 56
        },
        {
          id: 7,
          name: "Layers",
          description: "Layers of sediment as marks of the times.",
          categories: "art",
          pictureUrl: "https://picsum.photos/id/574/1920/1080.jpg",
          artist_id: 3,
          heart: 42
        },
        {
          id: 8,
          name: "Street reality",
          description:
            "It's not a special street, but it's the street where I was at that moment.",
          categories: "art",
          pictureUrl: "https://picsum.photos/id/212/1920/1080.jpg",
          artist_id: 3,
          heart: 3
        },
        {
          id: 9,
          name: "Sky is a limit",
          description: "Stars are another.",
          categories: "art",
          pictureUrl: "https://picsum.photos/id/654/1920/1080.jpg",
          artist_id: 1,
          heart: 16
        },
        {
          id: 10,
          name: "When the sun goes down",
          description: "Autumn of the day.",
          categories: "art",
          pictureUrl: "https://picsum.photos/id/320/1920/1080.jpg",
          artist_id: 1,
          heart: 22
        },
        {
          id: 11,
          name: "Sun White...",
          description: "..and the Trees Seven.",
          categories: "art",
          pictureUrl: "https://picsum.photos/id/423/1920/1080.jpg",
          artist_id: 1,
          heart: 32
        },
        {
          id: 12,
          name: "Learn how to cup",
          description: "Where all the bears are.",
          categories: "art",
          pictureUrl: "https://picsum.photos/id/635/1920/1080.jpg",
          artist_id: 1,
          heart: 5
        }
      ]);
    });
};
