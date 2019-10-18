const db = require('../../database/db-config.js');

module.exports = {
    getAll,
    getUser
};

function getAll() {
    return db('users');
}

function getUser(user_id) {
    return db('users').where({ id: user_id });
}
const db = require('../../database/db-config.js');

module.exports = {
    getAll,
    getUser
};

function getAll() {
    return db('users');
}

function getUser(user_id) {
    return db('users').where({ id: user_id });
}
