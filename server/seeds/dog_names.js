
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        {dog_name: 'Woola'},
        {dog_name: 'Diamond'},
        {dog_name: 'Cocoa'},
        {dog_name: 'Winston'},
        {dog_name: 'Simo'},
    
      ]);
    });
};
