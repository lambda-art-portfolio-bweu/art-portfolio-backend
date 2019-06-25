const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

// sanity check route
server.get('/', (req, res) => {
  res.status(200).json({ Hello: 'Team 10!' });
});

module.exports = server;
