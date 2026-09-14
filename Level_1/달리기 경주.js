//첫시도 -> 일부성공. 일부 시간초과
function solution(players, callings) {
  for (let i = 0; i < callings.length; i++) {
    const callingIndex = players.indexOf(callings[i]);
    players.splice(callingIndex, 1);
    players.splice(callingIndex - 1, 0, callings[i]);
  }
  return players;
}

//indexOf()와 splice()는 각각 O(N) 연산.
//그래서, players길이최대 5000명. callings 최대 1,000,000번이라서, 지금 매호출마다 1,000,000 * 50,000 = 500억번이상의 연산 발생해서 1초제한 초과함.

//두번째 시도 -> 해시맵(객체) 활용해서 자리바꾸기
function solution(players, callings) {
  // {선수이름: 현재등수(인덱스)} 매핑 객체 생성
  const playerIdx = {};
  for (let i = 0; i < players.length; i++) {
    playerIdx[players[i]] = i;
  }

  //호출될때마다 앞자리선수와 자리바꾸기
  for (let i = 0; i < callings.length; i++) {
    const currentName = callings[i];
    const currentIdx = playerIdx[currentName];
    const prevIdx = currentIdx - 1;
    const prevName = players[prevIdx];

    players[prevIdx] = currentName;
    players[currentIdx] = prevName;

    playerIdx[currentName] = prevIdx;
    playerIdx[prevName] = currentIdx;
  }
  return players;
}
// playerIdx[callings[i]]: indexOf 없이 O(1)으로 해당 선수의 위치를 즉시 조회
// 배열 직접 대입(players[prevIdx] = currentName): splice로 배열전체 흔들지 않고, 딱 두칸만 값교환
// 객체 인덱스 갱신: 두명 순서 바뀌어서 해시맵(playerIdx) 위치 정보도 업데이트.
