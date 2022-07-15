// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

var reverse = function(x) {
    let reverseInt = ""
    let num = x.toString();
    if (num[0] === "-"){
        reverseInt+= "-"
        for (let i = num.length-1; i > 0; i--){
            reverseInt+= num[i];
        }
    }
    else {
        for (let i = num.length-1; i >= 0; i--){
            reverseInt+= num[i];
        }
    }
    reverseInt = parseInt(reverseInt);
    if (reverseInt >= Math.pow(2,31) - 1 || reverseInt <= Math.pow(-2, 31)){
        return 0;
    }
    return reverseInt;
};

console.log(reverse(-12));