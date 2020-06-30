const mongoose = require('mongoose');

var Booking = mongoose.model('Booking', {
    bookingname: {type: String},
    bookingemail: {type: String},
    bookingphone: {type: String},
    bookingephone: {type: String},
    bookingDate: {type: String}

});;

module.exports = {Booking};