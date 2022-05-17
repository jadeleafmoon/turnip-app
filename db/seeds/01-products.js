/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {id: 1, name: 'Glasses', price: 15},
    {id: 2, name: 'Hat', price: 10.50},
    {id: 3, name: 'Desk', price: 200.99},
  ]);
};
