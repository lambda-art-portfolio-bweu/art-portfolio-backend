const router = require('express').Router();

const Artist = require('../artist/artist-model.js');
const restricted = require('../auth/restricted-middleware.js');


router.get('/', async (req, res) => {
    try {
      const allUsers = await Artist.findAll();
      res.status(200).json(allUsers);
    } catch(error) {
      res.status(500).json({ error: "There was an error getting users from the database" })
    }
  });
  
  router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
      const user = await Artist.findById(id);
      if (user.length > 0) {
        res.status(200).json(user[0]);
      } else {
        res.status(404).json({ error: `User with id ${id} does not exist`})
      }
    } catch(error) {
      res.status(500).json({ error: "There was an error getting the adventure from the database" })
    }
  });
  