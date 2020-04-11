const { MongoClient } = require('mongodb');

const { log, error } = console;

const URI_STRING = 'mongodb://localhost:27017',
  DB_NAME = 'Huey-emma';

// Make _db accessible in other files
let _db;

const mongoConnect = (uri, dbName) => async () => {
  try {
    let client = await new MongoClient(`${uri}/${dbName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).connect();
    // Log message to console
    log(`Database Connected by ${dbName}`);
    // Assign _db
    _db = client.db();
  } catch (err) {
    error(err);
  }
};

// Confirm _db
const getDB = () => (_db ? _db : new Error('No Database Connection'));

// Lazily evaluate mongoConnect func
const connectDB = mongoConnect(URI_STRING, DB_NAME);

module.exports = {
  connectDB,
  getDB,
};
