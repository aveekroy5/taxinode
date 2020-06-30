const express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aveekroy55555@gmail.com',
    pass: 'loveis420'
  }
});

var {DetailBooking} =  require('../models/detailbooking');

// => localhost:3000/detailbooking/
router.get('/', (req, res) => {
  DetailBooking.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Booking :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.post('/', (req, res) => {
    var mailOptions = {
        from: 'aveekroy55555@gmail.com',
        to: req.body.bookingemail,
        subject: 'Taxi Booking Denhug ('+req.body.bookingtype+')',
        html: '<h1>Hi '+ req.body.bookingname +'</h1><br/><br/><p>Thanks for booking we will contact you shortly</p><p>Please check below details, if you have entered anything wrong Book Again</p><p>Mobile No:<a href="tel:'+req.body.bookingphone+'">'+req.body.bookingphone+'</a></p><br/><p>Booking Time: '+req.body.bookingDate +' </p>'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      var detailbooking = new DetailBooking({
        bookingtype: req.body.bookingtype, 
        bookingname: req.body.bookingname,
        bookingemail: req.body.bookingemail,
        bookingphone: req.body.bookingphone,
        bookingephone: req.body.bookingephone,
        bookingDate: req.body.bookingDate,
        bookingnoofperson: req.body.bookingnoofperson,
        pickupaddress: req.body.pickupaddress,
        pickupzip: req.body.pickupzip,
        dropaddress: req.body.dropaddress,
        dropzip: req.body.dropzip,
        bookingnote: req.body.bookingnote
      });
      detailbooking.save((err, doc) => {
          if (!err) { res.send(doc); }
          else { console.log('Error in detailbooking Save :' + JSON.stringify(err, undefined, 2)); }
      });
});


module.exports = router; 