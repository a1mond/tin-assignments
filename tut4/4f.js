function isPrimeNumber(n) {
    var prime = true;
    for (var i = 2; i < n; i++)
        if (n % i === 0) { prime = false; break; }
    return prime;
}
console.log(isPrimeNumber(5));
console.log(isPrimeNumber(10));