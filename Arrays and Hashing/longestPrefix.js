// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
    var prefix = "";
    if(strs[0] === ""){
        return prefix;
    }
    let temp = "";
    let match = true;
    for(let i = 0; i < strs[0].length; i++){
        temp = strs[0][i];
        for(let j = 1; j < strs.length; j++){
            if(strs[j][i] === ""){
                return ""
            }
            if(strs[j][i] !== temp){
                match = false;
            }
        }
        if (match){
            prefix += temp;
        }
        else {
            return prefix
        }
    }
    return prefix
};

// let strs = ["flower","flow","flight"]
let strs = [""]

console.log(longestCommonPrefix(strs));