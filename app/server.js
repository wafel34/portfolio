var express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('siema');
});


app.listen(3000, () => {
    console.log('App listening on port: ');
});
