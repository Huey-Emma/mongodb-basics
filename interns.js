const { connectDB, getDB } = require('./database'),
  { Intern } = require('./models/Intern'),
  { Movie } = require('./models/Movies');

const { log, error } = console;

const MOVIES_COLLECTION = 'myMovies';

// Create Collection
const createCollection = (cName) => {
  let db = getDB();
  // Log Message to console
  log(`${cName} Collection Created!`);
  return db.collection(cName);
};

// Save data to database
const save = async (cName, data) => {
  await connectDB();
  let $data = await createCollection(cName).insertMany(data);
  log($data.ops);
};

const theBanker = new Movie('The Banker', '2020', 8);
const badBoys = new Movie('Bad Boys', '2020', 7);
const theHunt = new Movie('The Hunt', '2020', 7);
const bloodshot = new Movie('Bloodshot', '2020', 7.5);
const firstCow = new Movie('First Cow', '2020', 6.5);

const movies = [theBanker, badBoys, theHunt, bloodshot, firstCow];

save(MOVIES_COLLECTION, movies);
