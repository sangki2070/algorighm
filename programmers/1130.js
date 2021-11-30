// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한 조건
// 시험은 최대 10,000 문제로 구성되어있습니다.
// 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
// 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.


// ************ 풀이 ***************

function solution(answers) {
    let answer = []
    
    let a = [1,2,3,4,5]
    let b = [2,1,2,3,2,4,2,5]
    let c = [3,3,1,1,2,2,4,4,5,5]
    
    
    let result = 
        answers.filter((el,index) => el ===a[index % a.length]).length
    let result2 =
        answers.filter((el,index) => el === b[index % b.length]).length
    let result3 = 
        answers.filter((el,index) => el === c[index % c.length]).length
    
    let max = Math.max(result, result2, result3)
    
    if(result === max){
        answer.push(1)
    }
    if(result2 === max){
        answer.push(2)
    }
    if(result3 === max){
        answer.push(3)
    }
    return answer
}

// ===========================================

// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// ************* 풀이 ************************

function solution(numbers) {
    let answer = []
    let sum = 0
    
    for(let i = 0; i < numbers.length; i ++){
        for(let j = i + 1; j< numbers.length; j++){
            sum = numbers[i] + numbers[j]
            if(!answer.includes(sum)){
                answer.push(sum)
            }
        }
    }
    
    return answer.sort((a,b) => a-b)
}


// ================================

// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// *********** 풀이 ****************

function solution(arr) {
    let answer = 0
    for(let i = 0; i < arr.length; i ++){
        answer = answer + arr[i]
    }
    return answer / arr.length
}

// ======================================

// S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다. 그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다. 그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.

// 물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다. 예를 들어 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없습니다.

// 부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// d는 부서별로 신청한 금액이 들어있는 배열이며, 길이(전체 부서의 개수)는 1 이상 100 이하입니다.
// d의 각 원소는 부서별로 신청한 금액을 나타내며, 부서별 신청 금액은 1 이상 100,000 이하의 자연수입니다.
// budget은 예산을 나타내며, 1 이상 10,000,000 이하의 자연수입니다.

// ************** 풀이 *******************

function solution(d, budget) {
    let sum = 0
    let result = 0
    let arr = d.sort((a,b) => a-b)
    console.log(arr)
    
    for(let i = 0; i < arr.length; i ++){ 
        sum = sum + arr[i]
        if(sum <= budget){
            result = result + 1
        }
    }
    return result
}