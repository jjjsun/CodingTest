//첫 성공
// function solution(elements) {
//   let newElements = [];
//   for (let i = 0; i < elements.length; i++) {
//     newElements.push(elements[i]);
//   }
//   for (let i = 0; i < elements.length; i++) {
//     newElements.push(elements[i]);
//   }

//   let sumArr = [];
//   for (let i = 1; i <= elements.length; i++) {
//     for (let k = 0; k < elements.length; k++) {
//       //1. k부터 i개만큼 자르기
//       const piece = newElements.slice(k, k + i);
//       //2. 잘라낸 조각들의 합 구하기
//       let sum = 0;
//       for (let j = 0; j < piece.length; j++) {
//         sum += piece[j];
//       }
//       sumArr.push(sum);
//     }
//   }
//   //3. 중복 제거를 위해 Set에 담기
//   sumArr = [...new Set(sumArr)];
//   return sumArr.length;
// }

// 정확성  테스트
// 테스트 1 〉	통과 (0.12ms, 43.2MB)
// 테스트 2 〉	통과 (53.07ms, 55.6MB)
// 테스트 3 〉	통과 (84.08ms, 58.7MB)
// 테스트 4 〉	통과 (141.70ms, 65.1MB)
// 테스트 5 〉	통과 (82.90ms, 72.6MB)
// 테스트 6 〉	통과 (201.21ms, 82.3MB)
// 테스트 7 〉	통과 (257.73ms, 89MB)
// 테스트 8 〉	통과 (321.21ms, 110MB)
// 테스트 9 〉	통과 (376.02ms, 110MB)
// 테스트 10 〉	통과 (505.89ms, 109MB)
// 테스트 11 〉	통과 (242.06ms, 81.9MB)
// 테스트 12 〉	통과 (215.66ms, 81.9MB)
// 테스트 13 〉	통과 (158.66ms, 78.3MB)
// 테스트 14 〉	통과 (277.18ms, 89.1MB)
// 테스트 15 〉	통과 (249.50ms, 88.9MB)
// 테스트 16 〉	통과 (291.72ms, 110MB)
// 테스트 17 〉	통과 (388.96ms, 110MB)
// 테스트 18 〉	통과 (379.69ms, 110MB)
// 테스트 19 〉	통과 (428.95ms, 109MB)
// 테스트 20 〉	통과 (484.91ms, 109MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0

//문법 메서드 사용하기
function solution(elements) {
  //루프없이 2배 늘리기
  const newElements = elements.concat(elements);

  //처음부터 중복 값 못들어오도록 newSet으로 자동중복차단
  const sumSet = new Set();

  const len = elements.length;

  for (let i = 1; i <= len; i++) {
    for (let k = 0; k < len; k++) {
      const piece = newElements.slice(k, k + i);
      let sum = 0;
      for (let j = 0; j < piece.length; j++) {
        sum += piece[i];
      }
      //중복은 알아서 Set이 자동 제거함.
      sumSet.add(sum);
    }
  }
  return sumSet.size;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.10ms, 43.4MB)
// 테스트 2 〉	통과 (35.75ms, 52.9MB)
// 테스트 3 〉	통과 (86.12ms, 55.3MB)
// 테스트 4 〉	통과 (137.11ms, 55.4MB)
// 테스트 5 〉	통과 (96.68ms, 60.9MB)
// 테스트 6 〉	통과 (260.28ms, 60.8MB)
// 테스트 7 〉	통과 (298.58ms, 65.9MB)
// 테스트 8 〉	통과 (394.90ms, 65.4MB)
// 테스트 9 〉	통과 (485.73ms, 65.8MB)
// 테스트 10 〉	통과 (626.63ms, 66MB)
// 테스트 11 〉	통과 (124.61ms, 60.9MB)
// 테스트 12 〉	통과 (192.49ms, 60.7MB)
// 테스트 13 〉	통과 (260.67ms, 60.5MB)
// 테스트 14 〉	통과 (257.00ms, 65.4MB)
// 테스트 15 〉	통과 (359.96ms, 65.9MB)
// 테스트 16 〉	통과 (337.39ms, 66.4MB)
// 테스트 17 〉	통과 (401.36ms, 65.8MB)
// 테스트 18 〉	통과 (470.25ms, 66MB)
// 테스트 19 〉	통과 (621.99ms, 65.5MB)
// 테스트 20 〉	통과 (614.49ms, 65.9MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
