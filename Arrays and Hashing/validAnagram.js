//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var isAnagram = function(s, t) {
    if (s.length != t.length){
        return false;
    }
    for(let i = 0; i < s.length; i++){
        if(!t.includes(s[i])){
            return false;
        }
        else {
            t = t.replace(s[i],"");
        }
    }
    return true;
};

isAnagram("anagram", "nagaram");