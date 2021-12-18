const button        = document.querySelector('button');
const resultSpan    = document.querySelector('#result');
const num1          = document.querySelector('#num1');
const num2          = document.querySelector('#num2');
const operation     = document.querySelector('#operation');

const serverURL = 'http://localhost:3000'

button.addEventListener('click', () => {
    const num1val = num1.value;
    const num2val = num2.value;
    const operationVal = operation.value;
    var reqJSON = JSON.stringify({
        'num1': num1val,
        'num2': num2val,
        'operation': operationVal
    });
    var req = new XMLHttpRequest();
    req.open('POST', `${serverURL}/calc`, true);
    req.setRequestHeader('Content-type', 'application/json');
    req.onload = function() {
        const json = JSON.parse(req.responseText);
        const resultNum = json.result;
        resultSpan.innerHTML = resultNum;
    }
    req.send(reqJSON);
})