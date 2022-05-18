// Express stuff
const express = require('express');
const app = express();
const PORT = 6060;
app.use(express.json());

// import knex
const knex = require('./knex');

app.get('/items', (req, res) => {
	knex('items').returning('*').then((data) => {
		console.log('🔥 Server', data);
		res.send(data);
	});
});

app.listen(PORT, console.log(`You are listening on port ${PORT}`));
