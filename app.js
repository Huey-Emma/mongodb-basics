const { createServer } = require('http');

const { connectDatabase } = require('./database/database'),
  createCollection = require('./utils/database-connection'),
  Intern = require('./models/Intern');

const PORT = 3000;

const server = createServer();

const connectAndInsertData = async (cName, data) => {
  try {
    await connectDatabase();
    createCollection(cName).insertOne(data);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

connectAndInsertData('Interns', new Intern('Huey', 'Huey-emma'));

server.listen(PORT, _ => console.log('Server is listening on port ' + PORT));
