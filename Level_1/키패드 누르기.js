//   1  2  3
//   4  5  6
//   7  8  9
//   *  0  #
//L기준
//   0  1
//R기준
//      1  0

//3차이

function solution(numbers, hand) {
  const keyPos = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  let result = "";
  let right = "#";
  let left = "*";

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      result += "L";
      left = numbers[i];
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      result += "R";
      right = numbers[i];
    } else {
      let targetPos = keyPos[numbers[i]];
      let leftPos = keyPos[left];
      let rightPos = keyPos[right];
      let leftDist =
        Math.abs(targetPos[0] - leftPos[0]) +
        Math.abs(targetPos[1] - leftPos[1]);
      let rightDist =
        Math.abs(targetPos[0] - rightPos[0]) +
        Math.abs(targetPos[1] - rightPos[1]);
      if (leftDist < rightDist) {
        result += "L";
        left = numbers[i];
      } else if (rightDist < leftDist) {
        result += "R";
        right = numbers[i];
      } else {
        if (hand == "right") {
          result += "R";
          right = numbers[i];
        } else {
          result += "L";
          left = numbers[i];
        }
      }
    }
  }
  return result;
}

// 조건별 분기 처리/단계별 로직 분리
