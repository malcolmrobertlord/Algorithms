// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// var groupAnagrams = function(strs) {
//     let groupArr = [];
//     for(let i = 0; i < strs.length; i++){
//         let tempSortedString = strs[i].split('').sort().join("");
//         let tempGroup = []; 
//         for(let j = i; j < strs.length; j++){
//             if(groupArr.includes(strs[j])){
//                 continue;
//             }
//             else if(tempGroup.length === 0){
//                 tempGroup.push(strs[j])
//             }
//             else if (tempSortedString === strs[j].split('').sort().join("")){
//                 tempGroup.push(strs[j])
//             }
//         }
//         groupArr.push(tempGroup);
//     }
//     return groupArr;
// };

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));


let collectAnagrams = (words) => {
    let anagrams = {}
    let collectedAnagrams = []

    // iterate through words 
    for (let word of words){
        // use the anagrams hash to find & store arrays of anagrams

        // alphabetize letters
        let letters = word.split('').sort().join('')

        // create hash key-value pair for alphabetized letters of word if it does not exist
        anagrams[letters] = anagrams[letters] || []
        
        // add word to value of the key which matches its letters
        anagrams[letters].push(word)
        }
        
    //push those arrays into the collectedAnagrams array
    
  	// iterate through anagrams hash keys
    for (let key in anagrams){
     // add their values as subarrays of the collectedAnagrams array
        collectedAnagrams.push(anagrams[key])
    }

    // return the array of arrays
    return collectedAnagrams
}

console.log(collectAnagrams(["eat","tea","tan","ate","nat","bat"]))