function toCelsius(num) {
    return ((5/9) * (num - 32)).toFixed(1);
}

function toFahrenheit(num) {
    return (((9/5) * num) + 32).toFixed(1);
}

module.exports = {
    toCelsius: toCelsius,
    toFahrenheit: toFahrenheit
}