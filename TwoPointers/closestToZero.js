// Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

var findClosestNumber = function(nums) {
    nums.sort((function(a,b) {
        return a - b;
    }));
    console.log(nums)
    let closestNum = nums[0];
    for (let i = 1; i < nums.length; i++){
        let temp = Math.abs(nums[i]);
        // console.log(temp)
        if (temp <= Math.abs(closestNum)){
            // console.log(`temp: ${temp}   closest Num: ${closestNum}    i: ${i}`)
            closestNum = nums[i];
            // console.log(closestNum);
        }
        else {
            return closestNum;
        }
    }
    return closestNum;
};

// let nums = [2,-1,1]
let nums = [-4,-2,1,4,8]
console.log(findClosestNumber(nums))