const _ = require('lodash')

const { toCelsius, toFahrenheit } = require('./temp_converter')
const { toMiles, toKilometers } = require('./dist_converter');

const input = document.querySelector('#num');
const select = document.querySelector('#select-convert');
const button = document.querySelector('button');
const span = document.querySelector('#result');

button.addEventListener('click', () => {
    console.log('dupa');
    const selectVal = select.value;
    const inputVal = input.value;
    switch(selectVal) {
        case 'toMiles': span.innerHTML = toMiles(inputVal); break;
        case 'toFahrenheit': span.innerHTML = toFahrenheit(inputVal); break;
        case 'toCelsius': span.innerHTML = toCelsius(inputVal); break;
        case 'toKilometers': span.innerHTML = toKilometers(inputVal); break;
        default: span.innerHTML = 'something really strange occured'
    }
})