var nodemailer = require('nodemailer');

// local
// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: 'aveekroy55555@gmail.com',
//     pass: 'loveis420'
//   }
// });

//Aveek Roy
// var transporter = nodemailer.createTransport( { // Yes. SMTP!
//     host: "email-smtp.us-east-1.amazonaws.com", // Amazon email SMTP hostname
//     secureConnection: true, // use SSL
//     port: 25, // port for secure SMTP
//     auth: {
//         user: "AKIAXAWEREUXWLN7G7UB", // Use from Amazon Credentials
//         pass: "BBshBhFEGcs02uNMsl24WNGQvQ7/eCNh28TB7KFj1mId" // Use from Amazon Credentials
//     }
//   });

//Paji
var transporter = nodemailer.createTransport( { // Yes. SMTP!
    host: "email-smtp.us-east-1.amazonaws.com", // Amazon email SMTP hostname
    secureConnection: true, // use SSL
    port: 25, // port for secure SMTP
    auth: {
        user: "AKIAXUZWDFB4MVC5CJ6G", // Use from Amazon Credentials
        pass: "BD87Tu36UG4XoYCa9AdS6WF4oplj2vbifXzLix9tmFjP" // Use from Amazon Credentials
    }
  });

module.exports = transporter;