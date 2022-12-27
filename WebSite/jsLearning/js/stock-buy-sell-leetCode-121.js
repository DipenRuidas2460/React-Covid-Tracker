var stockBuySell = (prices) => {
    let sellIndx = prices.length - 1
    let profit = 0
    for (let buyIdx = prices.length - 1; buyIdx >= 0; buyIdx--) {
        if (prices[buyIdx] - prices[sellIndx] >= 0) sellIndx = buyIdx
        else {
            let price = prices[sellIndx] - prices[buyIdx]
            profit = Math.max(profit, price)
        }
    }
    return profit
}

console.log(stockBuySell([7, 1, 5, 3, 6, 4]));
console.log(stockBuySell([7,6,4,3,1]));