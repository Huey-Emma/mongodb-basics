const { connectDB, getDB } = require('./database'),
  { Intern } = require('./models/Intern');

const { log, error } = console;

const INTERN_COLLECTION = 'Interns';

// Create Collection
const createCollection = (cName, data) => {
  let db = getDB();
  // Log Message to console
  log(`${cName} Collection Created!`);
  return db.collection(cName);
};

const save = async (cName, data) => {
  await connectDB();
  createCollection(cName).insertOne(data);
};

const huey = new Intern('Emmanuel', 'Huey-emma');

save(INTERN_COLLECTION, huey);
