
// const hashPassword = require('../helpers/hashPassword');

const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt =  require('jsonwebtoken');
const secret = require('../config/secrets')
const tokenService = require('./token-service.js');

const  Artist = require('../artist/artist-model.js');
function generateToken(artist){
  const payload = {
    subject: artist.id,
    username: artist.username,

  }
  const options = {
    expiresIn: '1d'
  }
  return jwt.sign(payload, secret.jwtSecret, options)
}

router.post('/register', (req, res) => {
  let artist = req.body;
  const hash = bcrypt.hashSync(artist.password, 10);
  artist.password = hash;

  Artist.add(artist)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Artist.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = tokenService.makeTokenFromUser(user);
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