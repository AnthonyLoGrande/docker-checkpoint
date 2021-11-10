
exports.up = function(knex) {

    return knex.schema.createTable('dogs', table => {
        table.increments('id');
        table.string('dog_name');
        
});
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('dogs');
};
