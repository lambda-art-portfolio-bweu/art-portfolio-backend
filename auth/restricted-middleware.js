const jwt = require('jsonwebtoken');
require('dotenv').config();

const secrets = require('../config/secrets.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  const theSecrete = process.env.SECRET || 'Team10'

  if (token) {
    jwt.verify(token, theSecrete, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ You: "Can't touch this!" });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ You: 'Shall not pass!' });
  }
};
