//첫시도 → 실패. 이건 중복 단어만 체크함
// function solution(n, words) {
//     //전체 돌은 회수 구하고, 거기서  % n이 몇번째 사람인지 번호. %===0이면 n이 그사람 번호
//     //그리고, (돌은 회수-1) / n = 자신의 몇번쨰 사례에서 탈락하는지
//     let checklist = [];
//     let roundCount = 1;
//     let failNumber = 0;
//     let failRoundNum = 0;
//     for (const word of words){
//         if (checklist.includes(word) == true){
//             failNumber = roundCount % n === 0 ? n : (roundCount % n);
//             failRoundNum = (roundCount - 1) / n;
//             return [failNumber, failRoundNum];
//         }
//         else {
//             roundCount++;
//             checklist.push(word);
//         }
//     }
//     return [0,0];
// }

//두번째 → 성공.
//중복단어뿐만아니라 앞사람의 끝문자열에 맞춰서 했는지도 체크해야함
//그러면 for let i = 0 으로 for문돌아야함.
function solution(n, words) {
  let checklist = [];
  let roundCount = 2;
  let failNumber = 0;
  let failRoundNum = 0;
  checklist.push(words[0]);
  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    let lastword = words[i - 1];
    if (checklist.includes(word) == true || lastword.slice(-1) !== word[0]) {
      failNumber = roundCount % n === 0 ? n : roundCount % n;
      failRoundNum = Math.floor((roundCount - 1) / n) + 1;
      return [failNumber, failRoundNum];
    } else {
      roundCount++;
      checklist.push(word);
    }
  }
  return [0, 0];
}

//failRoundNum = Math.floor((roundCount- 1) / n) + 1;
//이거 여기서 처음에는 failRoundNum = Math.floor((roundCount- 1) / n) 이렇게 잘못했었는데.
//생각해보면,
//1~n번째 단어 → 1번째 차례
//n+1~2n번째 단어 → 2번째 차례
//2n+1~3n번째 단어 → 3번째 차례
//이기 때문에, roundCount - 1 한뒤에 버림하고, +1로 몇라운드인지 구하기!!!
