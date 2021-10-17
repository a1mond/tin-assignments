function secondLowestHighest(arr) {
    arr = arr.sort((a, b) => a - b);
    return [arr[1], arr[arr.length - 2]];
}

console.log(secondLowestHighest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))