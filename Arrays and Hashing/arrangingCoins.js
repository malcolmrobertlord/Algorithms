// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.

var arrangeCoins = function(n){
    let coins = n;
    if (coins == 1){
        return 1;
    }
    let rows = 0;
    let rowSlots = 1;
    while (coins > 0){
        coins--;
        rowSlots--;
        if (rowSlots === 0){
            rows++;
            rowSlots = rows+1;
        }
    }
    return rows;
}

console.log(arrangeCoins(3))