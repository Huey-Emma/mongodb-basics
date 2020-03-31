const http = require('http');

const { connectDB } = require('./database/database'),
  createCollection = require('./database/database-collection'),
  Intern = require('./models/Intern');

const PORT = 3000;

const server = http.createServer();

const saveToDB = collectionName => async data => {
  try {
    await connectDB();
    const collection = createCollection(collectionName);
    collection.insertOne(data);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const collection = saveToDB('interns');
collection(new Intern('Emmanuel', 'Huey-emma'));

server.listen(PORT, _ => console.log(`Server is listening o port ${PORT}`));
