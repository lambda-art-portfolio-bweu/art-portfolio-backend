const express = require('express');
const artistRouter = require('../artist/artist-router.js');
const authRouter = require('../auth/auth-router.js');
const postRouter = require('../posts/post-router.js');
const configMiddleware = require('./middleware.js');

const server = express();
configMiddleware(server);

server.use('/posts', postRouter)
server.use('/artist', artistRouter); // custom middleware
server.use('/auth', authRouter); //auth router


// sanity check route
// server.get('/', (req, res) => {
//   res.status(200).json({ Hello: 'Team 10 Go!' });
// });



module.exports = server;
