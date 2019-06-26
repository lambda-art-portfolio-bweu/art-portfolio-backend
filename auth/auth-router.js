
// const hashPassword = require('../helpers/hashPassword');

const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt =  require('jsonwebtoken');
const secret = require('../config/secrets')

const  Artist = require('../artist/artist-model.js');


module.exports = router;