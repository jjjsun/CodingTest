function solution(n, arr1, arr2) {
  let result = [];
  for (let i = 0; i < n; i++) {
    let findWall = [];
    let num1 = arr1[i].toString(2).padStart(n, "0");
    let num2 = arr2[i].toString(2).padStart(n, "0");
    for (let j = 0; j < n; j++) {
      if (num1[j] == 1 || num2[j] == 1) {
        findWall.push("#");
      } else {
        findWall.push(" ");
      }
    }
    result.push(findWall.join(""));
  }
  return result;
}

//문자열.padStart(목표길이, 채울문자): 현재 문자열 길이가 목표길이보다 짧을 때, 부족한 만큼 앞에 지정문자 채워서 길이 맞춰주는 메서드
