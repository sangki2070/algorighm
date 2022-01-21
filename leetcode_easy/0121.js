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

// ****************************

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// ============ 풀이 ==============

var defangIPaddr = function(address) {
    
    return address.replace(/\./g, '[.]')
};

// ****************************


// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// ============ 풀이 ==============

var maximumWealth = function(accounts) {
    
    for(let i = 0; i < accounts.length; i ++){
        console.log(accounts[i])
        accounts[i] = accounts[i].reduce((acc,cur) => acc += cur)
    }
    
    accounts.sort((a,b) => b-a)
    
    return accounts[0]
};