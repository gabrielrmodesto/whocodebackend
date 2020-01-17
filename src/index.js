const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://gabriel:1p3p4s5s6a7a@aircncdb-d9bbg.mongodb.net/week10?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);
