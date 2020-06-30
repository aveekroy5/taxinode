const mongoose = require('mongoose');

var Contact = mongoose.model('Contact', {
    bookingname: {type: String},
    bookingemail: {type: String},
    bookingphone: {type: String},
    bookingephone: {type: String},
    bookingDate: {type: String}

});;

module.exports = {Contact};