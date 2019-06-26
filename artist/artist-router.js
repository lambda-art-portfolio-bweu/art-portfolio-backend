const router = require('express').Router();

const Artist = require('../artist/artist-model.js');
const restricted = require('../auth/restricted-middleware.js');
