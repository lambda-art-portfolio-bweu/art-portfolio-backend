const db = require('../database/dbConfig.js');

module.exports = {
  findAll,
  findById,
  add,
  remove,
  findBy
};
function findAll() {
  return db('artist').select('id', 'username', 'password', artist);
}

function findById(id) {
  return db('artist')
    .where({ id })
}
