/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {name: 'Hat', price: 2},
    {name: 'Glasses', price: 15},
    {name: 'Shoes', price: 10.50},
    {name: 'TV', price: 200.99},
  ]);
};
