const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require("nodemailer");

const { mongoose } = require('./db.js');
var ratechartController = require('./controllers/ratechartController.js');
var bookingController = require('./controllers/bookingController.js');
var detailbookingController = require('./controllers/detailbookingController.js');
var airportbookingController = require('./controllers/airportbookingController.js');
var contactController = require('./controllers/contactController');
//var aboutusController = require('./controllers/aboutusController');

var app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/ratechart', ratechartController);
app.use('/booking', bookingController);
app.use('/detailbooking', detailbookingController);
app.use('/airportbooking', airportbookingController);
app.use('/contact', contactController);
//app.use('/aboutus', aboutusController);

