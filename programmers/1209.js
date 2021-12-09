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