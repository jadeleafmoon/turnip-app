/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
	// Deletes ALL existing entries
	await knex('items').del();
	await knex('items').insert([
		{
			name: 'Glasses',
			price: 20,
			owner: 'Bob',
			description: 'Some description text.'
		},
		{
			name: 'Shoes',
			price: 10.5,
			owner: 'Bob',
			description: 'Some description text.'
		},
		{
			name: 'TV',
			price: 200.99,
			owner: 'Enzo',
			description: 'Some description text.'
		},
		{
			name: 'Hat',
			price: 2,
			owner: 'Enzo',
			description: 'Some description text.'
		}
	]);
};
