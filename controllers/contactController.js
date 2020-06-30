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

var {Contact} =  require('../models/contact');

// => localhost:3000/contact/
router.get('/', (req, res) => {
  Contact.find((err, docs) => {
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
        to: req.body.contactemail,
        subject: 'Taxi Booking Denhug',
        html: '<h1>Hi '+ req.body.contactname +'</h1><br/><br/><p>Thanks for Contact we will contact you shortly</p><br/><p>From: Taxi Booking Den Haag</p>'
      };
      
      var mailOptionsown = {
        from: 'aveekroy55555@gmail.com',
        to: 'aveekroy55555@gmail.com',
        subject: req.body.contactsubject,
        html: '<h1>'+ req.body.contactmessage +'</h1><br/><br/><p>From: '+req.body.contactname+'<br/>'+req.body.contactemail+'</p>'

      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          res.send(info);
        }
      });

      transporter.sendMail(mailOptionsown, function(error, info){
        if (error) {
          console.log(error);
        } else {
          res.send(info);
        }
      });
});


module.exports = router; 