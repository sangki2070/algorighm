// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.


// *************** 풀이 *********************

function solution(arr) {
    
    let min = Math.min(...arr)
    let answer = arr.filter((el) => el !== min)
    
   return arr.length === 1 ? [-1] : answer
}


//===========================================

// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// *************** 풀이 *********************

function solution(n) {
    let answer = 0
    
    let arr = String(n).split("").sort((a,b) => b-a)
    answer = arr.join("")
    return Number(answer)
}

//===========================================

// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// *************** 풀이 *********************

function solution(num) {
    return num % 2 === 0 ? "Even" : "Odd"
}

//===========================================


// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// *************** 풀이 *********************

function solution(n) {
    let answer = 0;
    let number = Number.isInteger(Math.sqrt(n))
    
    if(number){
        answer = (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1)
    } else {
        answer = -1
    }
    
    return answer
}