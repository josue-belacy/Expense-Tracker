const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://JoshB:jab1213@cluster0.mvq9t.mongodb.net/test', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.on('error', (err) => console.log(err));

connection.on('connected', () => console.log('Mongo DB Connection Successful'));