// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// ============= 풀이 ================

var shuffle = function(nums, n) {
    let left = nums.slice(0, n )
    let right = nums.slice(n, nums.length)
    console.log(left)
    console.log(right)
    let result = []
    for(let i = 0; i < left.length; i ++){
        result.push(left[i])
        result.push(right[i])
    }
    return result
};

// *********************************

// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

// ============= 풀이 ================

var kidsWithCandies = function(candies, extraCandies) {
    let kids = Math.max(...candies)

    let result = []
    for(let i = 0; i < candies.length; i++){
        if(candies[i] + extraCandies < kids){
            result.push(false)
        } else {
            result.push(true)
        }
    }
    
    return result
};