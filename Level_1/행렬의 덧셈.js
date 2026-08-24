//첫성공 2차배열
function solution(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    const row = [];

    for (let j = 0; j < arr1[i].length; j++) {
      row.push(arr1[i][j] + arr2[i][j]);
    }
    result.push(row);
  }
  return result;
}

//이중 map()활용
function solution(arr1, arr2) {
  return arr1.map((row, i) => row.map((val, j) => val + arr2[i][j]));
}
//이건 아직 이해를 겨우 함 .계속 봐야할듯. 일단 map()을 내가 제일 어려워하는듯
