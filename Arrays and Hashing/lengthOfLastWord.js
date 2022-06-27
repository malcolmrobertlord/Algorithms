// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function(s) {
    let lastWord = "";
    for (let i = s.length - 1; i >= 0; i--){
        if(s[i] !== " "){
            lastWord+=s[i]
        }
        //checking if last word has been captured fully
        else if(s[i] === " " && lastWord !== ""){
            console.log(lastWord)
            return lastWord.length
        }
    }
    //edge case where there is only one word
    return lastWord.length
};

console.log(lengthOfLastWord("a"))