const express = require('express');
const usersRouter = require('./users/users-routes.js');

const server = express();

var wwwhisper = require('connect-wwwhisper');
// app holds a reference to express or connect framework, it
// may be named differently in your source file.
server.use(wwwhisper());

// Alternatively, if you don't want wwwhisper to insert
// a logout iframe into HTML responses use.
server.use(wwwhisper(false));

server.use(express.json());
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
    res.send('API running...');
});

module.exports = server;
