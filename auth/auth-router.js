
const router = require('express').Router();
const bcrypt = require('bcryptjs');

const  Artists = require('../artist/artist-model.js');
const hashPassword = require('../helpers/hashPassword');
const tokenService = require('../auth/token-service.js');

module.exports = router;