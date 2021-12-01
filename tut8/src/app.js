const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/../static/views'));

app.get('/hello', (_, res) => {
    res.send('hello world!')
})

app.get('/form', (_, res) => {
    res.render('form');
})

app.post('/formdata', (req, res) => {
    const { fname, lname, snumber } = req.body;
    res.render('formdata', { fname, lname, snumber });
})

app.post('/jsondata', (req, res) => {
    const { item, price, quantity } = req.body;
    res.render('jsondata', { item, price, quantity });
})

app.listen(3000, () => {
    console.log('Listening on 3000')
});