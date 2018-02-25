'use strict';

const express = require('express');
const app = express();
const dataPL = require('./data/PL_website.json');

app.set('PORT', (process.env.PORT || 3000));
app.set('view engine', 'ejs');
app.set('views', './app');
app.set('dataPL', dataPL);

app.use(express.static('app/public'));

app.get('/', (req, res) => {
    res.render('index', {
        dataPL: dataPL
    });
});


app.listen(app.get('PORT'), () => {
    console.log('App listening on port: ' + app.get('PORT'));
});
