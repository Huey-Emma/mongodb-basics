const { connectDB, getDB } = require('./database'),
  { Movie } = require('./models/Movies');

// Helper funcs
const { and, when } = require('./utils/lib');

// Log funcs
const { log, error } = console;

const MOVIES_COLLECTION = 'myMovies';

// Select Collection
const selectCollection = (cName) => {
  let db = getDB();
  return db.collection(cName);
};

const findAndUpdateDoc = (obj, newObj) => async (cName) => {
  await connectDB();
  try {
    let $data = await selectCollection(cName).find(obj).toArray();
    let data = $data[0];
    let updatedDoc = await selectCollection(cName).updateOne(data, newObj, {
      upsert: false,
    });
    // Confirm Update and log message
    const { matchedCount, modifiedCount } = updatedDoc;
    const confirmUpdate = when(and, () => log('Document Successfully Updated'));
    confirmUpdate(matchedCount, modifiedCount);
  } catch (err) {
    error(err);
  }
};

const updateCondtn = { $set: new Movie('Forest Gump', '1994', 8.8) };

let updateDoc = findAndUpdateDoc(
  { _movie: { $eq: 'The Banker' } },
  updateCondtn
);

// updateDoc(MOVIES_COLLECTION);
