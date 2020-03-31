const { getDB } = require('./database');

const createCollection = collectionName => {
  const db = getDB();
  let collection = db.collection(collectionName);
  console.log(`${collectionName} Collection Created!!!`);
  return collection;
};

module.exports = createCollection;
