
exports.up = function(knex) {
    return knex.schema
    .createTable("zoos", tbl=>{
        tbl.increments("zoo_id")
        tbl.string("zoo_name",128).notNullable()
        tbl.string("address",128).notNullable().unique()
    })
    .createTable("species", tbl=>{
        tbl.increments("species_id")
        tbl.string("species_name",128).notNullable().unique()
    })
    .createTable("animals", tbl=>{
        tbl.increments("animal_id")
        tbl.string("animal_name",128).notNullable()
        tbl.integer("species_id")
            .unsigned()
            .notNullable()
            .references("species_id")
            .inTable("species")
            .onDelete("CASCADE")
    })
    .createTable("zoo_animals", tbl=>{
        tbl.increments("zoo_animals_id")
        tbl.integer("zoo_id")
            .unsigned()
            .notNullable()
            .references("zoo_id")
            .inTable("zoos")
            .onDelete("CASCADE")
        tbl.integer("animal_id")
            .unsigned()
            .notNullable()
            .references("animal_id")
            .inTable("animals")
            .onDelete("CASCADE")
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("zoo_animals")
    .dropTableIfExists("animals")
    .dropTableIfExists("species")
    .dropTableIfExists("zoos")
};
