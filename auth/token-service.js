const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
 generateToken,
}

const mySecret = process.env.SECRET || 'Team10'

function generateToken(artist){
  const payload = {
    subject: artist.id,
    username: artist.username

  }
  const options = {
    expiresIn: '1d'
  }
  const token = jwt.sign(payload, mySecret, options);
  return token
}