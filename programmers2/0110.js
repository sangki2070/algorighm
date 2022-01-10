// 게임 캐릭터를 4가지 명령어를 통해 움직이려 합니다. 명령어는 다음과 같습니다.

// U: 위쪽으로 한 칸 가기

// D: 아래쪽으로 한 칸 가기

// R: 오른쪽으로 한 칸 가기

// L: 왼쪽으로 한 칸 가기

// 캐릭터는 좌표평면의 (0, 0) 위치에서 시작합니다. 좌표평면의 경계는 왼쪽 위(-5, 5), 왼쪽 아래(-5, -5), 오른쪽 위(5, 5), 오른쪽 아래(5, -5)로 이루어져 있습니다.


// ========== 풀이 ===============

function solution(dirs) {
    let answer = 0;
    let p = [0, 0]; // p[0] : x, p[1] : y
    const visit = []; // 방문 좌표 저장할 배열 선언
    
    for (let i of dirs) {
        const cur_p = p.slice(); // 배열 깊은 복사

		// 범위 체크 후 i에 따라 x, y +-
        if (i == 'U' && p[1] < 5) p[1]++;
        else if (i == 'D' && p[1] > -5) p[1]--;
        else if (i == 'R' && p[0] < 5) p[0]++;
        else if (i == 'L' && p[0] > -5) p[0]--;

        const st = p.join('') + cur_p.join(''); // 현재좌표+이동할좌표로 join 함수 사용하여 배열 문자열로 합치기
        const nd = cur_p.join('') + p.join(''); // 이동할좌표+현재좌표로 join 함수 사용하여 배열 문자열로 합치기
        
        // visit 배열에 st나 nd 포함할 경우 방문한 좌표이므로 패스 또는 st와 nd가 같으면 이동한 게 아니라 패스
        if (!visit.includes(st) && st != nd) {
            visit.push(st);
            visit.push(nd);
        } // 코드해석 하면서 생각한 건 두 값 모두 저장해야하나...? 이다... 

    }
    answer = visit.length / 2;
    return answer;
}