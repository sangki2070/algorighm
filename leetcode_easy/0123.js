// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// ============= 풀이 ================
var numIdenticalPairs = function(nums) {
    let result = 0
    
    for(let i =0; i< nums.length; i ++){
        for(let j = i + 1; j < nums.length; j ++){
            if(nums[i] === nums[j]){
                result +=1
            }
        }
    }
    
    return result
};