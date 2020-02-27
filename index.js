const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

/* app.use('/', (req, res) => {
    console.log(req.query); // http://localhost:3000/?q=10
    res.status(200).send('this is the answer fro server: ' 
    + (Number.parseInt(req.query.q)+1));
}); */

app.use('/', require('./routes'));
app.use('/ezegymasik/', require('./routes'));

app.listen(3000, () => {
    console.log('the server is running');
});

// node index.js futtatja