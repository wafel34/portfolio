'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dataPL = require('./data/PL_website.json');
const dataEng = require('./data/ENG_website.json');
const contactRoute = require('./contact-route');

app.set('PORT', (process.env.PORT || 3000));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './app');
app.set('dataPL', dataPL);

app.use(express.static('app/public'));


app.get('/', (req, res) => {
    res.render('index', {
        data: dataPL
    });
});

app.get('/pl', (req, res) => {
    res.render('index', {
        data: dataPL
    });
});

app.get('/en', (req, res) => {
    res.render('index', {
        data: dataEng
    });
});

app.use('/contact', contactRoute);



app.listen(app.get('PORT'), () => {
    console.log('App listening on port: ' + app.get('PORT'));
});
