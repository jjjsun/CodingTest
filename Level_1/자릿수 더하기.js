//첫 설공
function solution(n) {
  let num = String(n);
  let sum = 0;
  for (i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  return sum;
}

//더 간단한 버전
function solution(n) {
  return String(n)
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}
//문자열로 n변환후, split으로 배열로 변환되니까, reduce로 Number씌워서 값더하기 가능

//reduce()
배열.reuce((누적값, 현재값) => {
  return 다음_누적값;
}, 초기값);
