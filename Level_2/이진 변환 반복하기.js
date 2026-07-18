//1차시도
// function solution(s) {
//     let result = [];
//     let countZero = 0;
//     let time = 0;
//     while(true){
//         let num = "";
//         for(let i = 0; i < s.length; i++){
//             if (s[i] === "1"){
//                 num += "1"
//             }
//             else {
//                 counZero += 1
//             }
//         }
//         time++;
//         if ()
//     }

// }

// .toString(2)
// .parseInt()

//2차시도
// function solution(s) {
//     let answer = [];
//     let result = s;
//     let zeroCount = 0;
//     let numLength = 0;
//     let times = 0;
//     while(true){
//         for (let i = 0; i < result.length++; i++){
//             if (s[i] === "1"){
//                 numLength++;
//             }
//             else {
//                 zeroCount++;
//             }
//         }
//         times++;
//         if (result === "1"){
//             answer.push(times);
//             answer.push(zeroCount);
//             return answer;
//         }
//     }
// }

function solution(s) {
  let transformCount = 0;
  let removedZeroCount = 0;

  while (s !== "1") {
    const originalLength = s.length;
    const onlyOnes = s.split("0").join("");
    removedZeroCount += originalLength - onlyOnes.length;

    s = onlyOnes.length.toString(2);

    transformCount++;
  }
  return [transformCount, removedZeroCount];
}

//while문쓸때는 루프 조건이 되는 변수 안에서 반드시 다음 단계 값으로 업데이트되고 있는지 확인하기
//그리고, 개수 세기 노가다 복잡할때는 split과 length 차이 이용하기
