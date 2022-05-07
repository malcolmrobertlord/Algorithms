// Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring2 = function(s){
    if(s.length === 0){
        return 0
    }
    let maxLongest = 1;
    let temp = "";
    for (let i = 0; i < s.length; i++){
        // console.log(`i is ${i}`)
        temp = s[i]
        for(let j = i+1; j < s.length; j++){
            // console.log(`j is ${j}`)
            if(!temp.includes(s[j])){
                temp += s[j];
                maxLongest = Math.max(maxLongest, temp.length)
            }else {
                break;
            }
            // console.log(`the max longest is ${maxLongest}`);
            // console.log(`the temp is ${temp}`)
        }
    }
    return maxLongest;
};

console.log(lengthOfLongestSubstring("abcabcbb"))


///METHOD 2

var lengthOfLongestSubstring2 = function(s){
        let left = 0;
        let set = new Set();
        let maxLength = 0;
        
        for(let right = 0; right < s.length; right++){
            let currentChar = s[right];
            while(set.has(currentChar)){
                set.delete(s[left]);
                left++
            }
            set.add(currentChar);
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }

