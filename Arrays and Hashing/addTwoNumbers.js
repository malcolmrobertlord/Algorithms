// You are given two arrays representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as an array.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

var addTwoNumbers = function(l1, l2) {
    let num1 = "";
    let num2 = "";
    let sumLL = [];
    for(let i = l1.length - 1; i >= 0; i--){
        num1 += l1[i]
    }
    for(let i = l2.length - 1; i >= 0; i--){
        num2 += l2[i]
    }
    let sum = parseInt(num1) + parseInt(num2);
    sum = sum.toString();
    for (let i = sum.length-1; i >= 0; i--){
        sumLL.push(parseInt(sum[i]))
    }
    return sumLL;
};

addTwoNumbers([2,4,3],[5,6,4])