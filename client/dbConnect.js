const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://josh:savecash@cluster0.3rj2lfq.mongodb.net/expense-tracker', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.on('error', (err) => console.log(err));

connection.on('connected', () => console.log('Mongo DB Connection Successful'));
