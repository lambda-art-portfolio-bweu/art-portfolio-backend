const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
 generateToken,
}

const mySecret = process.env.SECRET || 'Heroku secret'

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