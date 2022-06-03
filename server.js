const {MongoClient} = require('mongodb');
const express = require('express')
const dbConnect = require('./dbConnect');
const app = express();
app.use(express.json())
const userRoute = require('./routes/userRoutes');
const { start } = require('repl');

const port = 5002;

app.listen(port, () => console.log(`Node JS server started at port ${port}!`));

async function start() {
  const client = new MongoClient 
}