const mongoose = require('mongoose');
const testEnv = {
  accountName: 'bd-demo-pfg', //Conexion name
  databaseName: 'demo-bd', //CosmosDB database name
  key: 'NyJVl8ZoO0sM4oNTEXVRq3SeztTk', // PRIMARY KEY
  port: 10255 // Port of Azure
};

const env = require('./env') || testEnv;

const mongoUri = `mongodb://${env.accountName}:${env.key}@${env.accountName}.documents.azure.com:${env.port}/${
   env.databaseName
}?ssl=true`;



function connect() {
  mongoose.set('debug', true);
  return mongoose.connect(
    mongoUri, {
      useNewUrlParser: true
    }
  );
}

module.exports = {
  connect,
  mongoose
};
