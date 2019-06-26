
// const hashPassword = require('../helpers/hashPassword');

const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt =  require('jsonwebtoken');
const secret = require('../config/secrets')

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


module.exports = router;