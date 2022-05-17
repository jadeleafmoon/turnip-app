// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
// 

module.exports = {
	client     : 'pg',
	connection : {
		host     : process.env.DB_HOST,
		port     : process.env.DB_PORT,
		database : process.env.DB_NAME,
		user     : process.env.DB_USER,
		password : process.env.DB_PASSWORD,
		charset: 'utf8'
	},
	migrations : {
		directory : './db/migrations',
		tableName : 'knex_migrations'
	},
	seeds      : {
		directory : './db/seeds'
	}
};