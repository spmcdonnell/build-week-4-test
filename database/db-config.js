const environment = process.env.NODE_ENV || 'development';

const knex = require('knex');

const knexConfig = require('../knexfile');

// module.exports = knex(knexConfig.production);
module.exports = knex(knexConfig[environment]);
