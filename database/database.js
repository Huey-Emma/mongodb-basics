const mongodb = require('mongodb');

const { MongoClient } = mongodb;

let _db;

exports.connectDB = async _ => {
  try {
    let client = await MongoClient.connect('mongodb://localhost:27017', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    _db = client.db('Huey-emma');
    console.log('Database Created by Huey-emma');
  } catch (err) {
    console.error(err);
    throw err;
  }
};

exports.getDB = _ => {
  if (_db) return _db;
  throw 'No database found';
};
