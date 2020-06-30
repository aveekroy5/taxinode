const express = require('express');
var router = express.Router();

var {AboutUs} =  require('../models/taxibooking');

// => localhost:3000/aboutus/
router.get('/', (req, res) => {
    AboutUs.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving AboutUs :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var aboutus = new AboutUs({
        pagetitle: req.body.pagetitle,
        details: req.body.details
    });
    aboutus.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in AboutUs Save :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router; 