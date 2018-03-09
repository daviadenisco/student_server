exports.up = function(knex, Promise) {
  return knex.schema.createTable("student_info_table", (table) => {
    // id
    table.increments();
    // full name
    table.string("full_name");
    // github
    table.string("github");
    // linkedin
    table.string("linkedin");
    // email address
    table.string('email').notNull();
    // personal/professional website
    table.string('professional_site');
    // linke to deployed capstone project
    table.string('capstone_link');
    // blurb describing the capstone project
    table.string('capstone_desc');
    table.string('headshot');
    // timestamps
    table.timestamps(true, true);
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("student_info_table");
};
