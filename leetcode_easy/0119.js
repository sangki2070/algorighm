// A string s can be partitioned into groups of size k using the following procedure:

// The first group consists of the first k characters of the string, the second group consists of the next k characters of the string, and so on. Each character can be a part of exactly one group.
// For the last group, if the string does not have k characters remaining, a character fill is used to complete the group.
// Note that the partition is done so that after removing the fill character from the last group (if it exists) and concatenating all the groups in order, the resultant string should be s.

// Given the string s, the size of each group k and the character fill, return a string array denoting the composition of every group s has been divided into, using the above procedure.

// ========= 풀이 ===========

var divideString = function(s, k, fill) {

    let abc2 = s.length % k
    let result = []
    
    if(abc2 !== 0){
        for(let i = 0; i < k - abc2; i ++){
            s += fill
        }
    }
    
    let abc = parseInt(s.length/k)
        
    for(let i = 0; i < abc; i ++){
        if(i === 0){
            result.push(s.slice(0,k))
        } else {
            result.push(s.slice(k*i, k*(i+1)))
        }
    }
    return result 
    
};

// ***************************************

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

// ============= 풀이 =====================

var isPalindrome = function(x) {
    
    let check = String(x).split("")
    console.log(check)
    let result = []
    
    for(let i = 0 ; i < check.length ; i ++){
        result.unshift(check[i])
    }
    return check.join("") === result.join("")
};