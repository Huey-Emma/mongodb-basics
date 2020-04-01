const { MongoClient } = require('mongodb');

let _db;

const connectDB = (uri, dbName) => async _ => {
  let client;
  try {
    client = await new MongoClient(`${uri}/${dbName}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }).connect();

    _db = client.db();

    console.log(`Database Connected by ${dbName}`);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const getDB = _ => (_db ? _db : new Error('No Database Connection'));

let connectDatabase = connectDB('mongodb://localhost:27017', 'Huey-emma');

exports.connectDatabase = connectDatabase;
exports.getDB = getDB;
