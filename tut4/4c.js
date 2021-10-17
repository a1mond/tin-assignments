function is_palindrome(str) {
    let passed = true;
    for (s = 0, e = str.length - 1; s < e; s++, e--)
        if (str[s] !== str[e]) { passed = false; break; }
    return passed;
}

console.log(is_palindrome('puuup'));
console.log(is_palindrome('bebra'));