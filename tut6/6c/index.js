const fname = document.querySelector('#fname');
const age = document.querySelector('#age');

fname.addEventListener('input', validate);
age.addEventListener('input', validate);

function validate() {
    if (!validate_name(fname.value)) fname.classList.add('incorrect')
    else fname.classList.remove('incorrect')

    if (!validate_age(age.value)) age.classList.add('incorrect')
    else age.classList.remove('incorrect')
}

function validate_name(value) {
    const pattern = /^[A-Z][a-z]{2,30}$/;
    return pattern.exec(value);
}

function validate_age(value) {
    if (value <= 0 || value > 120) return false;
    return true;
}

