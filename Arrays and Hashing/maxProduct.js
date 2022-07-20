// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

var maximumProduct = function(nums) {
    let maxProd = 0;
    if (nums.length == 3){
        maxProd = nums[0] * nums[1] * nums[2]
    }
    else {
        nums.sort((a,b) => a -b);
        // console.log(nums);
        maxProd = Math.max(nums[0] * nums[1] * nums[nums.length-1], nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length-3]);
    }
    return maxProd;
};

console.log(maximumProduct([-4,-7,2, 5, 0, 1]));