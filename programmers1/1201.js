// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.


// ************** 풀이 *******************

function solution(s) {
    let answer =""
    
    if(s.length % 2 !== 0){
        answer = s[Math.floor(s.length/2)]
    }
    if(s.length % 2 === 0){
        answer = s[s.length/2 -1] + s[s.length/2]
    }
    return answer
}

// ==============================================

// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 배열 arr의 크기 : 1,000,000 이하의 자연수
// 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수


// *************** 풀이 *********************

function solution(arr)
{
    let answer = []
    
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] !== arr[i + 1]){
            answer.push(arr[i])
        }
    }
    return answer
}


// ===========================================

// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// *************** 풀이 *********************

function solution(a, b) {
    let answer = 0
    if( a === b){
        answer = a
    }
    if( a > b){
        for(let i = b ; i <= a; i ++){
            answer = answer + i
        }
    }
    if( b > a){
        for(let i = a; i <= b; i ++){
            answer = answer + i
        }
    }
    return answer
}

// ===========================================

// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// *************** 풀이 *********************

function solution(s) {
    let answer = true
   
    for(let i =0; i < s.length; i ++){
        if(isNaN(s[i]) === true || s.length < 4 || s.length === 5 || s.length > 6 ){
            answer = false
            break
        }
        if(isNaN(s[i]) === false){
            answer = true
        }
    }
    return answer
}

// ===========================================


// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.

// *************** 풀이 *********************

function solution(s){
    let answer = true
    let arr = s.toLowerCase().split("")
    let sum1 = 0
    let sum2 = 0
  
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] === "p"){
            sum1 += 1
        }
        if(arr[i] === "y"){
            sum2 += 1
        }
    }
    if(!arr.includes("p") && !arr.includes("y") || sum1 === sum2){
        answer = true
    } else {
        answer = false
    }
    
    return answer
}

// ===========================================


// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// *************** 풀이 *********************

function solution(seoul) {
    let answer = seoul.indexOf("Kim")
    
    return "김서방은 " + answer+"에" + " 있다"
}


// ===========================================



// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// *************** 풀이 *********************

let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"


function solution(s) {
    let result3 = s.split("")
    let answer= []
    
    for(let i = 0; i < result3.length; i ++){
        answer.push(result3[i].charCodeAt(0))
    }

    answer.sort((a,b) => b - a)
    
    let newAnswer = answer.map((el) => String.fromCharCode(el)).join("")
    
    return newAnswer
}

// ===========================================

// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// *************** 풀이 *********************

function solution(n) {
    let answer = ""
    let a = "수"
    let b = "박"
    
    for(let i = 1; i <= n ; i ++){
        if(i % 2 !== 0){
            answer = answer + a
        } else {
            answer = answer + b
        }
    }
    return answer
}

// ===========================================


// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

// *************** 풀이 *********************


function solution(s) {
    let answer = ""
    
    let arr = s.split(" ")
    let arr2 = arr.map((el) => (el.split("")))
    
    for(let i = 0; i < arr2.length; i ++){
        for(let j = 0; j < arr2[i].length; j ++){
            if(j % 2 === 0){
                arr2[i][j] = arr2[i][j].toUpperCase()
            } else {
                arr2[i][j] = arr2[i][j].toLowerCase()
            }
        }
    }
    
    for(let t = 0; t < arr2.length; t ++){
        if(t === 0){
            answer = answer + arr2[t].join("")
        } else {
            answer = answer + " " + arr2[t].join("")
        }
    }
    return answer
}

// ===========================================


// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수

// *************** 풀이 *********************

function solution(n)
{
    let answer = 0
    let arr = String(n).split("")
    arr.map((el) => answer += Number(el))
    return answer
}

// ===========================================



// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// *************** 풀이 *********************

function solution(n) {
    let arr = String(n).split("")
    let answer = arr.map((el) => Number(el)).reverse()
    
    return answer
}