const jwt = require('jsonwebtoken');
require('dotenv').config();

const secrets = require('../config/secrets.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;