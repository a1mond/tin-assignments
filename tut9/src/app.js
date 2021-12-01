const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/calc', (req, res) => {
    let { num1, num2, operation } = req.body;
    num1 = Number(num1);
    num2 = Number(num2);
    calc = 0
    switch (operation) {
        case '+': calc = num1 + num2; break;
        case '-': calc = num1 - num2; break;
        case '*': calc = num1 * num2; break;
        case '/': calc = num1 / num2; break;
        default: res.send(JSON.stringify({ 'result': 'incorrect type of operation'}))
    }
    res.send(JSON.stringify({ 'result': calc }));
})

app.listen(3000);