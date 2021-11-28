const startPage = () => `
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="app.css">
    <title>Calculator</title>
</head>

<body>
    <form action="/calc" method="POST">
        <label for="num">Number 1: </label>
        <input type="number" name="num1" id="num1">
        <label for="num">Number 2: </label>
        <input type="number" name="num2" id="num2">
        <input type="submit" value="Submit">
    </form>
</body>

</html>
`;

const calcPage = (add, sub, mult, div) => `
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="app.css">
    <title>Calculator</title>
</head>
<body>
    <div class="add">${add}</div>
    <div class="sub">${sub}</div>
    <div class="mult">${mult}</div>
    <div class="div">${div}</div>
</body>
</html>
`;

exports.startPage = startPage;
exports.calcPage = calcPage;