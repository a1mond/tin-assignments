function toMiles(value) {
    return value / 1.609;
}
function toKilometers(value) {
    return value * 1.609;
}

module.exports = {
    toMiles: toMiles,
    toKilometers: toKilometers
}