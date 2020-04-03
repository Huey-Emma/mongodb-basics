const { MongoClient } = require('mongodb');

let _db;
const URI_STRING = 'mongodb://localhost:27017';
const DB_NAME = 'Huey-emma';

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

let connectDatabase = connectDB(URI_STRING, DB_NAME);

exports.connectDatabase = connectDatabase;
exports.getDB = getDB;
