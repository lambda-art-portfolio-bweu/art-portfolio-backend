const db = require('../data/dbConfig.js');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};

function get() {
    return db('posts');
  }
  
  function getById(id) {
    return db('posts')
      .where({ id })
      .first();
  }
  