// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// ============= 풀이 =============

var runningSum = function(nums) {
    let answer = []
    let sum = 0
    for(let i = 0; i < nums.length; i ++){
        sum += nums[i]
        answer.push(sum)
    }
    return answer
};