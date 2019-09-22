const express = require('express');
const usersRouter = require('./users/users-routes.js');

const server = express();

server.use(express.json());
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
    res.send('API running...');
});

module.exports = server;
