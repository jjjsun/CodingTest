//s = single = 점수
//d = double = 점수^2
//t = triple = 점수^3
//* = 지금 얻은거/직전얻은거 둘다 2배 (첫번째나오면, 지금얻은거만) (중첩가능. 2배*2배 = 4배됨)
//# = 지금 얻은거 마이너스. *랑 중첩되면, 2배로 마이너스(-2배)

function solution(dartResult) {
  let answer = 0;
  const result = dartResult.split("");
  let previousStr = "";
  let num = 0;
  const value = [];
  for (let i = 0; i < dartResult.length; i++) {
    const dart = dartResult[i];
    if (dart >= "0" && dart <= "9") {
      if (dart === "1" && dartResult[i + 1] === "0") {
        num = 10;
        i++;
      } else {
        num = Number(dart);
      }
    } else if (dart == "S") {
      value.push(num ** 1);
      previousStr = "";
    } else if (dart == "D") {
      value.push(num ** 2);
      previousStr = "";
    } else if (dart == "T") {
      value.push(num ** 3);
      previousStr = "";
    } else if (dart == "*") {
      value[value.length - 1] *= 2;
      if (value.length >= 2) {
        value[value.length - 2] *= 2;
      }
    } else if (dart == "#") {
      value[value.length - 1] *= -1;
    }
  }
  return value.reduce((acc, cur) => acc + cur, 0);
}

//문제가 생각보다 복잡해서 이해하는데 오래걸렸지만, 로직 차근차근이 하나씩 타파하면서 푸니까, 풀수있네!
//앞으로도 문제가 너무 복잡해서 이해조차 어렵다면 작은 단위로 쪼개서 작은것부터 하나씩 풀어보자.
