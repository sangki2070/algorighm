// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// ============= 풀이 ================

var numJewelsInStones = function(jewels, stones) {
    let result = 0
    
    for(let i = 0; i < stones.length; i ++){
        if(jewels.split("").includes(stones[i])){
            result += 1
        }
    }
    
    return result
};

// *************************************

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// ============= 풀이 ================

var smallerNumbersThanCurrent = function(nums) {
    let result = []
    
    for(let i = 0; i < nums.length; i ++){
        result[i] = 0
       for(let j =  1; j <nums.length; j++){
           if(nums[0] > nums[j]){
               result[i] += 1
           }
       }
        nums.push(nums[0])
        nums.shift()
    }
    return result
};