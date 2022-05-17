/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {name: 'Glasses', price: 20},
    {name: 'Shoes', price: 10.50},
    {name: 'TV', price: 200.99},
    {name: 'Hat', price: 2},
  ]);
};
