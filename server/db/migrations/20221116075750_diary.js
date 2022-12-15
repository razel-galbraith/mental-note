exports.up = function (knex) {
  return knex.schema.createTable('diary', (t) => {
    t.increments('id')
    t.date('created_on')
    t.string('emoji')
    t.string('thoughts')
    t.string('comments')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('diary')
}
