// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// ========== 풀이 ==============

var isValid = function(s) {
    let result = []
    
    const temp = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    let keys = Object.keys(temp)
    for(let i = 0; i < s.length; i ++){
        if(keys.includes(s[i])){
            result.push(s[i])
        } else {
            if(temp[result[result.length - 1]] === s[i]){
                result.pop()
            } else {
                return false
            }
        }
    }
   
    return !result.length
};

// **************************************

// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

// ================= 풀이 ================

var getConcatenation = function(nums) {
    return [...nums, ...nums]
};