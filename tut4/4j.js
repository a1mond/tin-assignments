function binary_search(num, arr) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = (low + high) / 2;
        let guess = arr[mid];
        if (guess === num)
            return mid;
        if (guess < num)
            low = mid + 1;
        else 
            high = mid - 1;
    }
    return null;
}

console.log(binary_search(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));