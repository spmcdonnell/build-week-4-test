exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments();
        table.text('username'), table.text('password'), table.text('firstName'), table.text('lastName'), table.integer('age');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
