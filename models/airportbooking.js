const mongoose = require('mongoose');

var AirportBooking = mongoose.model('AirportBooking', {
      bookingtype: {type: String}, 
      bookingname: {type: String},
      bookingemail: {type: String},
      bookingphone: {type: String},
      bookingephone: {type: String},
      bookingDate: {type: String},
      bookingnoofperson: {type: String},
      pickupaddress: {type: String},
      pickupzip: {type: String},
      dropaddress: {type: String},
      dropzip: {type: String},
      bookingnote: {type: String}
});

module.exports = {AirportBooking};