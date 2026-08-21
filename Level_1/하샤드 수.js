// 첫시도 -> 실패
// function solution(x){
//     return x % (String(x).split("").reduce((acc, cur) => acc+cur,0)) === 0 ? true : false;
// }

//두번째시도 -> 실패
// function solution(x){
//     return x % (String(x).split("").reduce((acc, cur) => acc+cur,0)) ? false : true;
// }

//세번째시도 -> 성공
function solution(x) {
  return x %
    String(x)
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0)
    ? false
    : true;
}

//문자열을 더하려고했으니 오류가 발생했던거
