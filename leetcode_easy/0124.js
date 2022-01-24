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

// *************************************


// Given an integer number n, return the difference between the product of its digits and the sum of its digits.


// ============= 풀이 ================


var subtractProductAndSum = function(n) {
    let x = 1
    let sum = 0
    let int = String(n)
    for(let i = 0; i < int.length; i ++){
        console.log(int[i])
        x = x * Number(int[i])
        sum += Number(int[i])
    }
    return x - sum
};

// *************************************


// There is a hidden integer array arr that consists of n non-negative integers.

// It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then encoded = [1,2,3].

// You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0].

// Return the original array arr. It can be proved that the answer exists and is unique.

// ============= 풀이 ================

var decode = function(encoded, first) {
    let origin = [first]
    
    for(let i = 0; i < encoded.length; i ++){
       origin.push(origin[i] ^ encoded[i])
    }
    return origin
};

// *************************************


// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

// ============= 풀이 ================

var restoreString = function(s, indices) {
    let result = []
    
    let newArr = s.split("").map((el,index) => indices[index] + el)

    newArr.sort((a,b) => a.slice(0,-1) - b.slice(0,-1))

    for(let i = 0; i < newArr.length; i ++){
        result.push(newArr[i][newArr[i].length - 1])
    }
    return result.join("")
};

// *************************************


// We are given a list nums of integers representing a list compressed with run-length encoding.

// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

// Return the decompressed list.

// ============= 풀이 ================


var decompressRLElist = function(nums) {
    let result = []
    
    for(let i = 0; i < nums.length; i += 2){
        result.push(Array(nums[i]).fill(nums[i + 1]))
    }
    
    return result.flat()
};