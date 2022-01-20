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

// **************************************


// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

// ================= 풀이 ================

var buildArray = function(nums) {
    let result = []
    for(let i = 0; i < nums.length; i ++){
        result.push(nums[nums[i]])
    }
    return result
};

// **************************************


// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

// ================= 풀이 ================

var finalValueAfterOperations = function(operations) {
    let answer = 0
    for(let i = 0; i < operations.length; i++){
        if(operations[i] === "++X" || operations[i] === "X++"){
            answer += 1
        } else {
            answer -= 1
        }
    }
    return answer
};