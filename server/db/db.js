// put all database functions in here
const connection = require('./connection')

function getDiary(db = connection) {
  return db('diary').select()
}

function getEntry(id, db = connection) {
  return db('diary').select().where('id', id).first()
}

// function getEntry(id, db = connection) {
//   return db('diary').select().where({ id })
// }

function addEntry(entry, db = connection) {
  return db('diary').insert(entry)
}

function deleteEntry(id, db = connection) {
  return db('diary').delete().where({ id })
}
//{id} is auto given a key value 'implicit object creation'

module.exports = {
  getDiary,
  getEntry,
  addEntry,
  deleteEntry,
}
