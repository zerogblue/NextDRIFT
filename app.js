const express = require('express');
const mongoose = require('mongoose');
var path = require('path');
const routes = require('./routes/routes');

require('dotenv').config();

const mongoString = process.env.DATABASE_URL
console.log(mongoString);

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

//

const app = express();
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/main.html'))
})

app.get('/event', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/event.html'))
})

app.get('/create-events', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/create-event.html'))
})

app.get('/view-events', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/view-events.html'))
})

app.use(express.json());
app.use('/api', routes);


app.listen(3000, () => {
    console.log('Server launched at 3000')
})