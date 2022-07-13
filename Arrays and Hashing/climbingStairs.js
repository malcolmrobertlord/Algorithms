// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


var climbStairs = function(n) {
    let pre = 1;
    let curr = 1;
    let temp = 0;
    for (let i = 1; i < n; i++) {
        temp = curr;
        curr = curr + pre;
        pre = temp;
    }
    return curr;
};


//ex:
// n = 4
// [2,2]
// [2, 1, 1]
// [1, 2, 1]
// [1, 1, 2]
// [1, 1, 1, 1]

// n = 5
// [1, 2, 2]
// [2, 1, 2]
// [2, 2, 1]
// [2, 1, 1, 1]
// [1, 2, 1, 1]
// [1, 1, 2, 1]
// [1, 1, 1, 2]
// [1, 1, 1, 1, 1]

// n = 6
// [2, 2, 2]
// [2, 2, 1, 1]
// [2, 1, 2, 1]
// [1, 2, 2, 1]
// [1, 2, 1, 2]
// [1, 1, 2, 2]
// [2, 1, 1, 1, 1]
// [1, 2, 1, 1, 1]
// [1, 1, 2, 1, 1]
// [1, 1, 1, 2, 1]
// [1, 1, 1, 1, 2]
// [1, 1, 1, 1, 1, 1]