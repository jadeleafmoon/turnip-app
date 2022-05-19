// Express stuff
require('dotenv').config();
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
	const newItem = req.body;
	console.log('🔥 POST /items req', newItem);

	knex('items').insert(newItem).returning('*').then((result) => {
		res.status(201).send(`The product ${result[0].name} has been added`);
	});
});

app.patch('/items/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const itemUpdates = req.body;

	knex('items')
		.where('id', '=', id)
		.update(itemUpdates)
		.returning('*')
		.then((result) => {
			res
				.status(200)
				.send(
					`The product ${itemUpdates.name} with id ${id} has been updated`
				);
		});
});

app.delete('/items/:id', (req, res) => {
	const id = parseInt(req.params.id);

	knex('items').where('id', '=', id).del().returning('*').then((result) => {
		res
			.status(200)
			.send(`The product ${result[0].name} with id ${id} has been deleted`);
	});
});

app.listen(PORT, console.log(`You are listening on port ${PORT}`));
