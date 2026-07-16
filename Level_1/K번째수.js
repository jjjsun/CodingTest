//맞긴하지만, 두자리수나오면 틀려짐. 10랑 2있으면, 2,10으로 sort하겠지만,
//10앞에 1이 2보다 작아서 10,2로 sort함.
// function solution(array, commands) {
//   let answer = [];
//   for (let i = 0; i < commands.length; i++) {
//     let numSort = [];

//     for (let j = commands[i][0] - 1; j < commands[i][1]; j++) {
//       numSort.push(array[j]);
//     }
//     let numLocation = commands[i][2];
//     numSort.sort();
//     answer.push(numSort[numLocation - 1]);
//   }
//   return answer;
// }

function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let numSort = [];

    for (let j = commands[i][0] - 1; j < commands[i][1]; j++) {
      numSort.push(array[j]);
    }
    let numLocation = commands[i][2];

    //소괄호 안에 숫자 정렬 함수를 넣어줌.
    //정렬 기준 함수를 넣어주면, 문자열이 아니라 숫자로 인식함
    numSort.sort((a, b) => a - b);
    answer.push(numSort[numLocation - 1]);
  }
  return answer;
}
