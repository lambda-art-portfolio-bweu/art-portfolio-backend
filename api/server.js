const express = require('express');

const server = express();

// sanity check route
server.get('/', (req, res) => {
  res.status(200).json({ Hello: 'Team 10!' });
});

module.exports = server;
