// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// var threeSum = function(nums) {
//     let threeSumArr = []
//     nums.sort((a,b) => a - b);
//     // console.log(nums)
//     for (let i = 0; i < nums.length; i++){
//         let temp = []
//         for(let j = i+1; j < nums.length; j++){

//             for(let k = j+1; k < nums.length; k++){
//                 if(nums[i] + nums[j] + nums[k] == 0){
//                     // console.log(`${nums[i]}, ${nums[j]}, ${nums[k]}`);
//                     temp.push(nums[i], nums[j], nums[k]);
//                     threeSumArr.push(temp);
//                     temp = [];
//                 }
//             }
//         }
//     }
//     console.log(threeSumArr)
//     for(let i = 0; i < threeSumArr.length; i++){
//         // console.log(threeSumArr[i])
//         for(let j = i+1; j < threeSumArr.length; j++){
//             // console.log(threeSumArr[j])
//             if (JSON.stringify(threeSumArr[i]) == JSON.stringify(threeSumArr[j])){
//                 console.log("in the splice at index " + j )
//                 threeSumArr.splice(j,1);
//                 console.log(threeSumArr)
//             }
//         }
//     }
//     return threeSumArr;
// };

// console.log(threeSum([0,0,0,0]));


var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let obj = {};
    let result = [];
    for(var i = 0; i < nums.length-2; i++){
            // do two sum here
            var target = -nums[i];
            var left = i+1;
            var right = nums.length - 1;
        
        while(left < right){
            let curr = nums[left] + nums[right];
            if(curr > target)
            {
                right--;        
            }
            else if(curr < target){
                left++;
            }
            else{
                let arr = [-target, nums[left], nums[right]];
                if(obj[arr]=1){
                    obj[arr]=1;
                    result.push(arr);
                }
                left++;
                right--;
            }   
        }  
    }
    return result;
};