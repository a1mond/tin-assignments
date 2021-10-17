const fact_r = (num) => {
    if (num <= 1) return 1;
    return num * fact_r(num - 1);
}

function fact_i(num) {
    let total = num;
    for (i = num - 1; i > 0; i--) {
        total *= i;
    }
    return total;
}

console.log(fact_r(5))
console.log(fact_i(5))