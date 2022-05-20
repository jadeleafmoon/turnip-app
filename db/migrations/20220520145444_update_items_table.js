/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
	return knex.schema.table('items', function(table) {
		table.string('owner').defaultTo("").notNullable();
		table.text('description').defaultTo("").notNullable();
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
	return knex.schema.table('items', function(table) {
		table.dropColumn('owner');
		table.dropColumn('description');
	});
};
