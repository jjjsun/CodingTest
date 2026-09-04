//첫 성공
function solution(nums) {
  let result = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let num = nums[i] + nums[j] + nums[k];
        let count = 0;
        for (let z = 2; z < num; z++) {
          if (num % z == 0) {
            count++;
          }
        }
        if (count == 0) result++;
      }
    }
  }
  return result;
}
//이거 test코드 통과 시간
// 테스트 23 〉	통과 (0.07ms, 44MB)
// 테스트 24 〉	통과 (37.78ms, 49.9MB)
// 테스트 25 〉	통과 (37.67ms, 49.6MB)
// 테스트 26 〉	통과 (0.09ms, 43.9MB)

//직전 소수찾기에서 활용한 제곱근을 이용해서 더 효율적으로
function solution(nums) {
  let result = 0;
  const len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        const num = nums[i] + nums[j] + nums[k];
        let isPrime = true;
        for (let z = 2; z * z <= num; z++) {
          if (num % z == 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) result++;
      }
    }
  }
  return result;
}
//이거 test 코드 시간
// 테스트 23 〉	통과 (0.09ms, 44.1MB)
// 테스트 24 〉	통과 (1.12ms, 49.8MB)
// 테스트 25 〉	통과 (1.17ms, 49.1MB)
// 테스트 26 〉	통과 (0.10ms, 43.8MB)
// 훨씬 빠름

//음 이제 test 코드 통과 시간도 확인하고, 성장하고 있다. 눈에트이는 구나.
//똑깉은 코드더라도 더 효율적으로 짜려고 노력하고. (근데 일단 첫번째는 푸는게 중요!)
//그리고 직전에 배웠던거 써먹으려고 하는거 굳굳. 좋은 자세.
