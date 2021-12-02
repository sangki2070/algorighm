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

//===========================================

// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// *************** 풀이 *********************

function solution(phone_number) {
    let answer = ""  
    let arr = phone_number.split("")

    for(let i = 0; i < arr.length; i ++){
        if(i < arr.length -4){
            answer = answer + "*"
        } else {
            answer = answer + arr[i]
        }
    }
    return String(answer)
}

//===========================================

// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// *************** 풀이 *********************

function solution(x, n) {
    let answer = [];
    
    for(let i = 1 ; i <= n; i ++){
        answer.push(i * x)
    }
    return answer
}

//===========================================

// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
// *************** 풀이 *********************

function solution(n, m) {
    let a = 0
    
    for( let i =0; i <= n ; i ++){
        if(n % i === 0 && m % i === 0){
            a = i
        }
    }
    let b = n * m / a
    
    return [a, b]
}



// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

//===========================================

// *************** 풀이 *********************

function solution(arr1, arr2) {
    
    for(let i = 0; i < arr1.length; i ++){
        for(let j = 0; j < arr1[i].length; j ++){
            arr1[i][j] = arr1[i][j]+ arr2[i][j]
        }
    }
    return arr1
}

//===========================================


// 1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.

// 1-1. 입력된 수가 짝수라면 2로 나눕니다. 
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
// 예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 됩니다. 위 작업을 몇 번이나 반복해야하는지 반환하는 함수, solution을 완성해 주세요. 단, 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.

// *************** 풀이 *********************

function solution(num) {
    let answer = 0
    for ( let i = 0; i <= 500; i ++){
        if(num === 1){
            break
        }
        if(i >= 500){
            answer = -1
            break
        }
        if(num % 2 === 0){
            num = num /2
            answer = answer + 1
        } else {
            num = num * 3 + 1
            answer = answer + 1
        }
    }
    return answer
}

//===========================================

// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// *************** 풀이 *********************

function solution(x) {
    let answer = true
    let arr = String(x).split("")
    let sum = 0
    
    for(let i = 0; i < arr.length; i ++){
        sum = Number(sum) + Number(arr[i])
        if(x % sum === 0){
            answer = true
        } else {
            answer = false
        }
    }
    return answer
}

//===========================================

// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// *************** 풀이 *********************

function solution(n) {
    var answer = 0;
    
    for(let i = 1; i <= n ; i ++){
        if(n % i === 0){
            answer = answer + i
        } 
    }
    return answer
}

//===========================================

// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// *************** 풀이 *********************

function solution(arr, divisor) {   
    let answer = arr.filter((el) => el % divisor === 0).sort((a,b) => a-b)
    
    return answer.length === 0 ? [-1] : answer
}

//===========================================

// 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
// 단, 금액이 부족하지 않으면 0을 return 하세요.

// *************** 풀이 *********************

function solution(price, money, count) {
    let answer = 0;
    let sum = 0
    for(let i = 1; i <= count ; i ++){
        sum = sum + (price * i)
        console.log(sum)
    }
    answer = sum - money
    
    return answer <= 0 ? 0 : answer
    
}

//===========================================

// 명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

// 아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

// 명함 번호	가로 길이	세로 길이
// 1	60	50
// 2	30	70
// 3	60	30
// 4	80	40
// 가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 이때의 지갑 크기는 4000(=80 x 50)입니다.

// 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.


// *************** 풀이 *********************

function solution(sizes) {

    let max = []
    let max2 = []
    sizes.sort((a,b) => b-a)
    for(let i = 0 ; i < sizes.length; i ++){
        sizes[i].sort((a,b) => b-a)
        max.push(sizes[i][0])
        max2.push(sizes[i][1])
    }
    max.sort((a,b) => b-a)
    max2.sort((a,b) => b-a)

    return(max[0] * max2[0])
}

//===========================================

// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// *************** 풀이 *********************
function solution(a, b) {
    let answer = 0
    
    for(let i =0; i < a.length; i ++){
        answer = answer + a[i]*b[i]
    }
    return answer
}