//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function(nums) {
    var tempArr = [];
    for (let i = 0; i < nums.length; i++){
        if (tempArr.includes(nums[i])){
            return true;
        }
        else {
            tempArr.push(nums[i]);   
        }
    }
    return false;
};