//10진수 -> 2진수
//.toString(2)
//2진수 -> 10진수
//.parseInt(문자열, 2)

function solution(n) {
  const num1 = n.toString(2);
  let countNum1 = 0;
  for (let i = 0; i < num1.length; i++) {
    if (num1[i] === "1") {
      countNum1++;
    }
  }
  for (let i = n + 1; i < 1000000; i++) {
    let num2 = i.toString(2).split("");
    let countNum2 = 0;
    for (let i = 0; i < num2.length; i++) {
      if (num2[i] === "1") {
        countNum2++;
      }
    }
    if (countNum1 === countNum2) {
      return i;
    }
  }
}

//여기는 num1[i] === 1이라고 했다가 틀림. 문자열 비교니까, 1 숫자가 아니라, "1"로 작성해야지!!
