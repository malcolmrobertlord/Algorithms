// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.

// Note that the integers in the lists may be returned in any order.

var findDifference = function(nums1, nums2) {
    let uniqueNums1 = [];
    let uniqueNums2 = [];
    for (let i = 0; i < nums1.length; i++){
        if(!nums2.includes(nums1[i])){
            if(!uniqueNums1.includes(nums1[i])){
                uniqueNums1.push(nums1[i]);
            }
        }
    }
    for (let j = 0; j < nums2.length; j++){
        if(!nums1.includes(nums2[j])){
            if(!uniqueNums2.includes(nums2[j])){
                uniqueNums2.push(nums2[j]);
            }
            
        }
    }
    return [uniqueNums1, uniqueNums2]
}

console.log(findDifference([1,2,3], [2,4,6]))