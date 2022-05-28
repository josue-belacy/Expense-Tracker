const express = require('express');
const dbConnect = require('./dbConnect');
const app = express();
app.use(express.json())
const userRoute = require('./routes/userRoutes')

const port = 5002;

app.listen(port, () => console.log(`Node JS server started at port ${port}!`));
