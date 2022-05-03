// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function(prices) {
    var leftP = 0;
    var rightP = 1;
    var maxProfit = 0;
    while (rightP < prices.length){
        if(prices[leftP] < prices[rightP]){
            var profit = prices[rightP] - prices[leftP];
            maxProfit = Math.max(profit, maxProfit)
        }
        else {
            leftP = rightP;
        }
        rightP++;
    }
    return maxProfit;
};