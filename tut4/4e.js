function find_longest(str) {
    return str
        .split(' ')
        .sort((a, b) => b.length - a.length)
        [0]
}

console.log(find_longest('im the smartest idiot'));