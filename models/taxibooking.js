const mongoose = require('mongoose');

var RateChart = mongoose.model('RateChart', {
    locationfrom: {type: String},
    locationto: {type: String},
    timefrom: {type: String},
    timeto: {type: String},
    price: {type: Number}

});

// var AboutUs = mongoose.model('RateChart', {
//     pagetitle: {type: String},
//     details: {type: String}

// });

module.exports = {RateChart};