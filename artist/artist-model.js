const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('artist').select('id', 'username');
}

function findBy(filter) {
  return db('artist').where(filter);
}

async function add(user) {
  const [id] = await db('artist').insert(artist);

  return findById(id);
}

function findById(id) {
  return db('artist')
    .select('id', 'username')
    .where({ id })
    .first();
}
