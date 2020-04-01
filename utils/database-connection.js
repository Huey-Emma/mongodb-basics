const { getDB } = require('../database/database');

const createCollection = name => {
  let db = getDB();
  console.log(`${name} Collection Created!`);
  return db.collection(name);
};

module.exports = createCollection;
