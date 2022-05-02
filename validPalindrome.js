// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, '');
    s = s.toLowerCase();
    for (let i = 0; i < s.length; i++){
        if (s[i] != s[s.length-1-i]){
            return false;
        }
    }
    return true;
};

isPalindrome("A man, a plan, a canal: Panama");
