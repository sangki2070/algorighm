// Given two arrays of integers nums and index. Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// It is guaranteed that the insertion operations will be valid.

// ============= 풀이 ================

var createTargetArray = function(nums, index) {
    let result = []
    
    for(let i = 0; i < nums.length; i ++){
        result.splice(index[i],0,nums[i])
    }
    
    return result
};

// *******************************

// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

// ============= 풀이 ================

var interpret = function(command) {
    let result = command.replace(/\(\)/g,"o",).split("")
    return result.filter((el) => el !== "(" && el!== ")").join("")
};

// *******************************


// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it in the maximum amount of balanced strings.

// Return the maximum amount of split balanced strings.

 // ============= 풀이 ================

 var balancedStringSplit = function(s) {
    let l = 0
    let r = 0
    let count = 0
    
    for(let i = 0; i < s.length; i ++){
        if(s[i] === "L"){
            l++
        }
        if(s[i] === "R"){
            r++
        }
        if(l === r){
            count ++
        }
    }
    
    return count
};