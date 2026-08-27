function solution(food) {
  let result = [];
  result.push(0);
  for (let i = food.length - 1; i > 0; i--) {
    let count = Math.floor(food[i] / 2);

    for (let j = count; j > 0; j--) {
      result.push(i);
      result.unshift(i);
    }
  }
  return result.join("");
}

//Math.floor를 생각못해서 처음에 %2 !== 0으로 if홀수 else짝수로 나눠서 계산했음...비효율....

//배열 맨 앞에 값추가 : unshift()
//배열 맨 앞에 값제거 : shift()
//배열 맨 뒤 값추가 : push()
//배열 맨 뒤 값제거 : pop()
//배열 중간에 값 추가/삭제 : splice()
