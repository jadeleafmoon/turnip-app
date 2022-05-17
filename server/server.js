// Express stuff
const express = require('express');
const app = express();
const PORT = 6060;
app.use(express.json());

// import knex
const knex = require('./knex');

app.get('/hello', (req, res) => {
	knex.raw('SELECT VERSION()').then((data) => {
		console.log('🔥 version', data.rows[0].version);
		res.send(data.rows[0].version);
	});

	// Full code looks like this
	// knex
	// 	.raw('SELECT VERSION()')
	// 	.then((data) => data.rows[0].version)
	// 	.catch((err) => {
	// 		console.log(err);
	// 		throw err;
	// 	})
	// 	.finally(() => {
	// 		knex.destroy();
	// 	});
});

app.get('/items', (req, res) => {
	knex('items').returning('*').then(data => {
		console.log("🔥 Server", data);
		res.send(data);
	});
	
});

app.listen(PORT, console.log(`You are listening on port ${PORT}`));
