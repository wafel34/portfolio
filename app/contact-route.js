const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/', function(req,res){
    const transporter =  nodemailer.createTransport({
        host: 'smtp.gmail.com',
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    });

    var clientOptions = {
            to: req.body.contactEmail, // list of receivers
            subject: 'Contact Confirmation ✔', // Subject line
            html: // html body
            '<b>Witaj '+req.body.contactName+'!</b>'+
            `<p>Dziękuję za wiadomość.</p>
            <p>Niedługo na nią odpowiem.</p>
            <br>
            <p>Pozdrawiam serdecznie,</p>

            <p>Paweł Marcinkowski</p>`
        };

    transporter.sendMail(clientOptions, function(err, info){
        if (err) {
            return console.log(err);
        }
       console.log('Message sent: %s', info.messageId);
       // Preview only available when sending through an Ethereal account
       console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });

    var adminOptions = {
            to: process.env.EMAIL, // list of receivers
            subject: 'New email query.', // Subject line
            html:
            '<p>From: '+req.body.contactName+'</p>'+
            '<p>Email: '+req.body.contactEmail+'</p>'+
            '<p>'+req.body.contactMessage+'</p>'
        };

    transporter.sendMail(adminOptions, function(err, info){
        if (err) {
            res.sendStatus(500);
            return console.log(err);
        }
       res.sendStatus(200);
       console.log('Message sent: %s', info.messageId);
       // Preview only available when sending through an Ethereal account
       console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});


module.exports = router;
