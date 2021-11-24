const button = document.querySelector('#convert-button');
const tempDisplay = document.querySelector('#conv-temp');

function performConversion() {
    const temp = document.querySelector('#temp')
                    .value;

    const select = document.querySelector('#temp-type')
    const type = select
                    .options[select.selectedIndex]
                    .value;

    tempDisplay.innerHTML = 
            type == 'c' ? toCelsius(temp) : toFahrenheit(temp);
}

button.addEventListener("click", performConversion);

function toCelsius(num) {
    return `${((5/9) * (num - 32)).toFixed(1)}°C`;
}

function toFahrenheit(num) {
    return `${(((9/5) * num) + 32).toFixed(1)}°F`;
}