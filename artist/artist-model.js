const db = require('../database/dbConfig.js');

module.exports = {
  findAll,
  findById,
  add,
  remove,
  update,
  findBy
};
function findAll() {
  return db('artist')
}

function findById(id) {
  return db('artist')
    .where({ id })
}
async function add(artist) {
  const [id] = await db('artist').insert(artist);

  return findById(id);
}
function update(id, changes) {
  return db('artist')
    .where({ id })
    .update(changes);
}


async function remove(id) {
  return db('artist').where({ id }).delete();
}

function findBy(filter) {
  return db('artist').where(filter);
}