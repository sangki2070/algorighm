// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// *********** 풀이 **************

function solution(participant, completion) {
    participant.sort()
    completion.sort()
    
    for(let i = 0; i < participant.length ; i ++){
        if(participant[i] !== completion[i]){
            return participant[i]
        }
    }
}

// =====================================

// 카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다. 다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다.
// 갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다. 다트 게임의 점수 계산 로직은 아래와 같다.

// 다트 게임은 총 3번의 기회로 구성된다.
// 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
// 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
// 옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
// 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
// Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
// 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
// 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.

// *********** 풀이 **************

function solution(dart) {
    let answer = []

    for(let i = 0; i < dart.length; i ++){
        if(dart[i]>='0' && dart[i]<='9'){
            if(dart[i]=='1' && i+1<dart.length && dart[i+1]=='0'){
                answer.push(10);
                i+=1;
            }else{
                 answer.push(+dart[i]);
            }
           
        }
        if(dart[i] === "S"){
            answer[answer.length -1] = answer[answer.length -1] * 1
        }
        if(dart[i] === "D"){
            answer[answer.length-1] = answer[answer.length-1] ** 2
        }
        if(dart[i] === "T"){
            answer[answer.length-1] = answer[answer.length-1] ** 3
        }
        if(dart[i] === "*"){
            if(answer.length === 1){
                answer[answer.length -1] = answer[answer.length -1] * 2
            } else {
                answer[answer.length -2] = answer[answer.length -2] * 2
                answer[answer.length -1] = answer[answer.length -1] * 2
            }
        }
        if(dart[i] === "#"){
            answer[answer.length -1] = answer[answer.length -1] * -1
        }
    }

    return answer.reduce((acc, cur) => acc + cur)
}

// =====================================


// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// *********** 풀이 **************

function solution(array, commands) {
    let answer = []
    
    for(let i = 0; i < commands.length; i ++){
        answer.push(array.slice(commands[i][0]-1 , commands[i][1]).sort((a,b) => a-b)[commands[i][2] -1])
    }
    return answer
}

// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.


function solution(nums) {
    let answer = 0
    
    for(let i = 0; i < nums.length; i ++){
        for(let j = i + 1; j < nums.length; j++){
            for(let u = j + 1; u < nums.length; u++){
                    const sum = nums[i] + nums[j] + nums[u]
                    if(isPrime(sum)) answer ++
            }
        }
    }
    return answer
}

function isPrime(sum) {
    for(let i = 2; i < sum; i++)
    if(sum % i === 0) return false;
    return sum > 1;
}