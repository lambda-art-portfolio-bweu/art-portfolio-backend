const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  makeTokenFromArtist,
}

const mySecret = process.env.SECRET || 'Heroku secret'

function makeTokenFromArtist(artist) {
  const payload = {
    subject: artist.id,
    username: artist.username,

  }
  const options = {
    expiresIn: '1d',
  }
  const token = jwt.sign(payload, mySecret, options);
  return token
}