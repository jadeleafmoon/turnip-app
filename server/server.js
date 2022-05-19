// Express stuff
require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 6060;
app.use(express.json());

// import knex
const knex = require('./knex');

app.get('/api', (req, res) => {
	res.send("You've reached /api!");
});

app.get('/api/hello', (req, res) => {
	res.send("You've reached /api/hello!");
});

app.get('/hello', (req, res) => {
	res.send("You've reached /hello!");
});

app.get('/items', (req, res) => {
	knex('items').returning('*').then((data) => {
		// console.log('🔥 Server', data);
		res.send(data);
	});
});

app.post('/items', (req, res) => {
	console.log('🔥 POST /items req', req.body);
	knex('items').insert(req.body);
	// await knex('items').insert([
	//   {name: 'Glasses', price: 20},
	//   {name: 'Shoes', price: 10.50},
	//   {name: 'TV', price: 200.99},
	//   {name: 'Hat', price: 2},
	// ]);
	res.send("Done!");
});

app.listen(PORT, console.log(`You are listening on port ${PORT}`));
