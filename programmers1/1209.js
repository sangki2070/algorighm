// 스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.
// 이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
// 맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

// 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
// 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
// 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
// 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
// 4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
// 순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

// ************ 풀이 **************
function solution(numbers, hand) {
    let result =""
    let arr = []
    let left = [1, 4, 7]
    let right = [3, 6, 9]
    let center = [2,5,8,20]
    let leftState=[21]
    let rightState=[21]

    for(let j = 0 ; j < numbers.length; j ++){
        if(numbers[j] === 0){
            arr.push(20)
        } else {
            arr.push(numbers[j])
        }
    }

    for(let i = 0; i < arr.length; i ++){
        if(left.includes(arr[i])){
            result += "L"
            leftState.push(arr[i])
        }
        if(right.includes(arr[i])){
            result += "R"
            rightState.push(arr[i])
        }

        if(center.includes(arr[i])){
            let leftValue = Math.abs(arr[i] - leftState[leftState.length - 1])
            let rightValue = Math.abs(arr[i] - rightState[rightState.length -1])
            let leftNumber = 0
            let rightNumber = 0
            if(leftValue === 1 || leftValue === 3 || leftValue === 12){
                leftNumber = 100
            }
            if(leftValue === 2 || leftValue === 4 || leftValue === 6|| leftValue === 13|| leftValue === 15){
                leftNumber = 200
            }
            if(leftValue === 5 || leftValue === 7 || leftValue === 16 || leftValue === 18){
                leftNumber = 300
            }
            if(leftValue === 19){
                leftNumber = 400
            }
            if(rightValue === 1 || rightValue === 3 || rightValue === 12){
                rightNumber = 100
            }
            if(rightValue === 2 || rightValue === 4 || rightValue === 6 || rightValue === 11 || rightValue === 13 || rightValue === 15){
                rightNumber = 200
            }
            if(rightValue === 5 || rightValue === 7 || rightValue === 14  || rightValue === 16 || rightValue === 18){
                rightNumber = 300
            }
            if(rightValue === 19 || rightValue === 17){
                rightNumber = 400
            }

            if(leftNumber < rightNumber){
                result += "L"
                leftState.push(numbers[i])
                if(numbers[i] === 0){
                    leftState.push(20)
                }
            }
            if(leftNumber > rightNumber){
                result += "R"
                rightState.push(numbers[i])
                 if(numbers[i] === 0){
                    rightState.push(20)
                }
            }
            if(leftNumber === rightNumber){
                if(hand === "left"){
                    result += "L"
                    leftState.push(numbers[i])
                    if(numbers[i] === 0){
                    leftState.push(20)
                }
                }
                if(hand === "right"){
                    result += "R"
                    rightState.push(numbers[i])
                    if(numbers[i] === 0){
                    rightState.push(20)
                }
                }
            }
        }
    }
    return result
}

// ==============================

// 로또 6/45(이하 '로또'로 표기)는 1부터 45까지의 숫자 중 6개를 찍어서 맞히는 대표적인 복권입니다. 아래는 로또의 순위를 정하는 방식입니다. 1

// 순위	당첨 내용
// 1	6개 번호가 모두 일치
// 2	5개 번호가 일치
// 3	4개 번호가 일치
// 4	3개 번호가 일치
// 5	2개 번호가 일치
// 6(낙첨)	그 외
// 로또를 구매한 민우는 당첨 번호 발표일을 학수고대하고 있었습니다. 하지만, 민우의 동생이 로또에 낙서를 하여, 일부 번호를 알아볼 수 없게 되었습니다. 당첨 번호 발표 후, 민우는 자신이 구매했던 로또로 당첨이 가능했던 최고 순위와 최저 순위를 알아보고 싶어 졌습니다.
// 알아볼 수 없는 번호를 0으로 표기하기로 하고, 민우가 구매한 로또 번호 6개가 44, 1, 0, 0, 31 25라고 가정해보겠습니다. 당첨 번호 6개가 31, 10, 45, 1, 6, 19라면, 당첨 가능한 최고 순위와 최저 순위의 한 예는 아래와 같습니다.

// 당첨 번호	31	10	45	1	6	19	결과
// 최고 순위 번호	31	0→10	44	1	0→6	25	4개 번호 일치, 3등
// 최저 순위 번호	31	0→11	44	1	0→7	25	2개 번호 일치, 5등
// 순서와 상관없이, 구매한 로또에 당첨 번호와 일치하는 번호가 있으면 맞힌 걸로 인정됩니다.
// 알아볼 수 없는 두 개의 번호를 각각 10, 6이라고 가정하면 3등에 당첨될 수 있습니다.
// 3등을 만드는 다른 방법들도 존재합니다. 하지만, 2등 이상으로 만드는 것은 불가능합니다.
// 알아볼 수 없는 두 개의 번호를 각각 11, 7이라고 가정하면 5등에 당첨될 수 있습니다.
// 5등을 만드는 다른 방법들도 존재합니다. 하지만, 6등(낙첨)으로 만드는 것은 불가능합니다.
// 민우가 구매한 로또 번호를 담은 배열 lottos, 당첨 번호를 담은 배열 win_nums가 매개변수로 주어집니다. 이때, 당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return 하도록 solution 함수를 완성해주세요.

// ************ 풀이 **************

function solution(lottos, win_nums) {
    let check = []
    let result = []
    let sum = 0
    let arr = lottos.filter((el) => el !== 0).sort((a,b) => b-a)
    let arr2 = lottos.filter((el) => el === 0)
    
    for(let i = 0; i < win_nums.length ; i ++){
        if(arr.includes(win_nums[i])){
            sum += 1
        }
    }
    check.push(sum + arr2.length,sum)

    for(let j = 0; j < check.length; j ++){
        if(check[j] === 6){
            result.push(1)
        }
        if(check[j] === 5){
            result.push(2)
        }
        if(check[j] === 4){
            result.push(3)
        }
        if(check[j] === 3){
            result.push(4)
        }
        if(check[j] === 2){
            result.push(5)
        }
        if(check[j] === 1 || check[j] === 0){
            result.push(6)
        }
    }
    return result
    
}

// ==============================

// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

// 제한 조건
// strings는 길이 1 이상, 50이하인 배열입니다.
// strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
// 모든 strings의 원소의 길이는 n보다 큽니다.
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

// ************ 풀이 **************


function solution(strings, n) {
    for(let i = 0; i < strings.length; i ++){
        strings[i] = strings[i][n] + strings[i]
    }
    strings.sort()
    for(let j = 0 ; j < strings.length ; j ++){
        strings[j] = strings[j].slice(1,strings[strings.length])
    }
    return strings
}