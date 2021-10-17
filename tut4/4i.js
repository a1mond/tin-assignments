function amountToCoins(num, coins = [5, 2, 1]) {
    calc_coins = [];
    while (num !== 0) {
        for (let i = 0; i < coins.length; i++) {
            if (num - coins[i] < 0)
                continue;
            else {
                calc_coins.push(coins[i]);
                num -= coins[i];
                break;
            }
        }
    }
    return calc_coins;
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));