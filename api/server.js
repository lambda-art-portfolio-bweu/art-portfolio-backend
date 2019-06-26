const express = require('express');
const artistRouter = require('../artist/artist-router.js')
const configMiddleware = require('./middleware.js');

const server = express();
configMiddleware(server);

server.use('/artist', artistRouter); // custom middleware

// sanity check route
// server.get('/', (req, res) => {
//   res.status(200).json({ Hello: 'Team 10 Go!' });
// });



module.exports = server;
