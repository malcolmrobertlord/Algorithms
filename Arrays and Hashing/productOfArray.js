// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

var productExceptSelf = function(nums) {
    let prodArr = [];
    let copyNums = [...nums];
    // console.log(nums.length)
    for(let i = 0; i < nums.length; i++){
        // console.log("this is i " + i)
        let temp = [...copyNums];
        // console.log(temp)
        temp.splice(i, 1);
        // console.log(temp);
        if (temp.includes(0)){
            // console.log("in the if")
            prodArr.push(0);
            continue;
        }
        else{
            let prod = temp[0];
            for(let j = 1; j < temp.length; j++){
                prod *= temp[j]
            }
            // console.log(prod);
            prodArr.push(prod);
        }
    }
    return prodArr;
};

console.log(productExceptSelf([0,2,3,4]))