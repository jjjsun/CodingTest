//찻 성공
// function solution(survey, choices) {
//   const len = choices.length;
//   // let arr[] = [[R,T], [C,F], [J,M], [A,N]];
//   const score = {
//     R: 0,
//     T: 0,
//     C: 0,
//     F: 0,
//     J: 0,
//     M: 0,
//     A: 0,
//     N: 0,
//   };
//   for (let i = 0; i < len; i++) {
//     const type = survey[i].split("");
//     if (choices[i] < 4) {
//       score[type[0]] += Math.abs(choices[i] - 4);
//     } else if (choices[i] > 4) {
//       score[type[1]] += Math.abs(choices[i] - 4);
//     }
//   }
//   let result = "";
//   result += score["R"] >= score["T"] ? "R" : "T";
//   result += score["C"] >= score["F"] ? "C" : "F";
//   result += score["J"] >= score["M"] ? "J" : "M";
//   result += score["A"] >= score["N"] ? "A" : "N";
//   return result;
// }

//더 간단하게
function solution(survey, choices) {
  const len = choices.length;
  const score = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < len; i++) {
    const type = survey[i];
    if (choices[i] < 4) {
      score[type[0]] += Math.abs(choices[i] - 4);
    } else if (choices[i] > 4) {
      score[type[1]] += Math.abs(choices[i] - 4);
    }
  }

  let result = "";
  const indicators = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];
  for (const [first, second] of indicators) {
    result += score[first] >= score[second] ? first : second;
  }

  return result;
}
