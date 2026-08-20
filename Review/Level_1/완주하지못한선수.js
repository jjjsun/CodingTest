// function solution(participant, completion){
//     participant.sort();
//     completion.sort();
//     for (let i = 0; i < completion.length; i++){
//         if (participant[i] !== completion[i]){
//             return participant[i];
//         }
//     }
// }

function solution(participant, completion) {
  const p = [];
  for (const name of participant) {
    p[name] = (p[name] || 0) + 1;
  }
  for (const name of completion) {
    p[name]--;
  }

  for (const name in p) {
    if (p[name] > 0) {
      return name;
    }
  }
}
