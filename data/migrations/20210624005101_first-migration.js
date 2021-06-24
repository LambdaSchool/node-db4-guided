
exports.up = function(knex) {
    return knex.schema
    .createTable()
    .createTable()
    .createTable()
    .createTable()
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists()
    .dropTableIfExists()
    .dropTableIfExists()
    .dropTableIfExists()
};
