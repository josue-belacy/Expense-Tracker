const express = require('express');
const app = express();
const port = 5002;

app.get('/', (req, res) => res.send('Hello world!'));
app.listen(port, () => console.log(`Node JS server started at port ${port}!`));