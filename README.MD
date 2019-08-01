# API-NODE

## Description

API in NodeJS and Express with connection to a Azure CosmosDB.

## Getting Started

### Download

    > git clone http://github.com/pablocc/api-node

### Install dependencies

    > npm install

### Configurate Database

    Edit the file env.js in the root folder.

```javascript
    module.exports = {
      accountName: '', //Conexion name
      databaseName: '', //CosmosDB database name
      key: '', // Personal key
      port: 10255 // Port of Azure
    };

``` 

It is not recommended to save the keys of this file in public repositories. This file should be hidden by including it in the .gitignore file and then manually include it in the pipeline.

### Start 

    > docker-compose up

### Test

    > npm test
    
 The test command generate a junit report with the test results. You can found it in the folder results.

### Build Docker Image

Run `docker build -t api-node .` for build the Docker Image.

### Run Docker Image 

Run `docker run -d -p 4000:4000 api-node`. Navigate to `http://localhost:4000` to see the app running.
