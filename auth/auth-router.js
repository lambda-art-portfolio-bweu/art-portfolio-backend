
const router = require('express').Router();
const bcrypt = require('bcryptjs');

const  Artists = require('../artist/artist-model.js');
const hashPassword = require('../helpers/hashPassword');
const tokenService = require('../auth/token-service.js');


router.post('/register', (req, res) => {
  let artist = req.body;
  const hash = hashPassword(artist.password);
  artist.password = hash;

  Artists.add(artist)
    .then(saved => {
      const token = tokenService.makeTokenFromArtist(saved);
      res.status(201).json({
        saved,
        id: saved[0].id,
        token
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Artists.findBy({ username })
    .first()
    .then(artist => {
      if (artist && bcrypt.compareSync(password, artist.password)) {
        const token = tokenService.makeTokenFromArtist(artist);
        res.status(200).json({
          message: `Welcome ${artist.username}!`,
          id: artist.id,
          token
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
module.exports = router;