// 정렬 후 for문을 사용하여 풀기
// function solution(participant, completion) {
//     participant.sort();
//     completion.sort();

//     for (let i = 0; i < participant.length; i++){
//         if (participant[i] !== completion[i]){
//             return participant[i];
//         }
//     }
// }

// HashMap을 이용해서 풀기
function solution(participant, completion) {
  const p = {};

  // 참가자 명단 돌면서 이름을 key로 사람수를 value로 기록
  for (const name of participant) {
    p[name] = (p[name] || 0) + 1;
  }

  // 완주자 명단 돌면서 해시맵에 기록된 사람 수를 1씩 차감
  for (const name of completion) {
    p[name]--;
  }

  // 해시맵에서 남은 사람수가 1인 사람이 완주못한 사람이므로 리턴한다
  for (const name in p) {
    if (p[name] > 0) {
      return name;
    }
  }
}
