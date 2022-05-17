// Knex stuff
// get the config file
const config = require('../knexfile');

// creates an instance of knew with the config
const knex = require('knex')(config);

// to check if psql db and knex are connected
// knex.raw('SELECT VERSION()').then((data) => console.log('🔥 version', data));

// export knex, to use knex with express GET command in Express, i.e. server.js
module.exports = knex;
