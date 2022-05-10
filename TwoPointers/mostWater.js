// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

var maxArea = function(height) {
    let maxWater = 0;
    let currentWater = 0;
    let lPointer = 0;
    let rPointer = height.length - 1;
    while (rPointer > lPointer){
        console.log(`the right pointer is at ${rPointer}`)
        console.log(`the left pointer is at ${lPointer}`)
        console.log(`the max water is currently ${maxWater}`)
        currentWater = (rPointer - lPointer)*(Math.min(height[lPointer], height[rPointer]));
        console.log(`the current water is ${currentWater}`)
        maxWater = Math.max(maxWater, currentWater);
        if(height[lPointer] > height[rPointer]){
            rPointer--
        }
        else {
            lPointer++
        }
    }
    return maxWater;
};

console.log(maxArea([2,3,4,5,18,17,6]))