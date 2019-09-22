const userData = require('../../seed-data/user-data.js');

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users')
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex('users').insert(userData);
        });
};
