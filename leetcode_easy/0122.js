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