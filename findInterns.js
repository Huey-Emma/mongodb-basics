const { connectDB, getDB } = require('./database');

// Helper funcs
const { nth } = require('./utils/lib');

// Log funcs
const { log, error } = console;

const MOVIES_COLLECTION = 'myMovies';

// Select Collection
const selectCollection = (cName) => {
  let db = getDB();
  return db.collection(cName);
};

// Fetch All documents from collection
const fetchAll = async (cName) => {
  await connectDB();
  try {
    let $data = await selectCollection(cName).find().toArray();
    log($data);
  } catch (err) {
    error(err);
  }
};

// fetchAll(MOVIES_COLLECTION);

// Fetch a single document by position from collection
const fetch = (docPstn) => async (cName) => {
  await connectDB();
  try {
    let $data = await selectCollection(cName).find().toArray();
    let getDocument = nth(docPstn);
    let data = getDocument($data);
    log(data);
  } catch (err) {
    error(err);
  }
};

// Fetch the first document in the collection
const fetchFirstDocument = fetch(0);
// fetchFirstDocument(MOVIES_COLLECTION);

// Fetch documents based on conditions
const fetchCond = (condObj) => async (cName) => {
  await connectDB();
  try {
    let $data = await selectCollection(cName).find(condObj).toArray();
    log($data);
  } catch (err) {
    error(err);
  }
};

const queryCondEq = { _rating: { $eq: 7 } };
const documentEq7 = fetchCond(queryCondEq);
// documentEq7(MOVIES_COLLECTION);

// Document Projection showing only movie titles
const fetchCondProj = (condObj) => async (cName) => {
  await connectDB();
  try {
    let $data = await selectCollection(cName).aggregate(condObj).toArray();
    log($data);
  } catch (err) {
    error(err);
  }
};

const queryCondProjObj = [{ $project: { _movie: true } }];

let documentProjMovieTitle = fetchCondProj(queryCondProjObj);
// documentProjMovieTitle(MOVIES_COLLECTION);
