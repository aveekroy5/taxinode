const express = require('express');
var router = express.Router();
var transporter = require('./../mail.js');

var {Booking} =  require('../models/booking');

// => localhost:3000/booking/
router.get('/', (req, res) => {
  Booking.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Booking :' + JSON.stringify(err, undefined, 2)); }
    });
});

// router.post('/', (req, res) => {
//     var ratechart = new RateChart({
//         locationfrom: req.body.locationfrom,
//         locationto: req.body.locationto,
//         timefrom: req.body.timefrom,
//         timeto: req.body.timeto,
//         price: req.body.price,
//     });
//     ratechart.save((err, doc) => {
//         if (!err) { res.send(doc); }
//         else { console.log('Error in RateChart Save :' + JSON.stringify(err, undefined, 2)); }
//     });
// });

router.post('/', (req, res) => {
    console.log(req.body)
    var mailOptions = {
        from: 'aveekroy55555@gmail.com',
        to: req.body.bookingemail,
        subject: 'Taxi Booking Denhug(Quick Booking)',
        html: '<h1>Hi '+ req.body.bookingname +'</h1><br/><br/><p>Thanks for booking we will contact you shortly</p><p>Please check below details, if you have entered anything wrong Book Again</p><p>Mobile No:<a href="tel:'+req.body.bookingphone+'">'+req.body.bookingphone+'</a></p><br/><p>Booking Time: '+req.body.bookingDate +' </p>'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.send(info); 
        }
      });
});


module.exports = router; 