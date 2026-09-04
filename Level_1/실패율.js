//첫 성공
function solution(n, stages) {
  const len = stages.length;
  let passCount = new Array(n).fill(0);
  let failCount = new Array(n).fill(0);

  for (let i = 0; i < len; i++) {
    let num = stages[i];
    for (let j = 1; j <= num; j++) {
      if (j <= n) {
        if (num > j) passCount[j - 1]++;
        else failCount[j - 1]++;
      }
    }
  }

  //[스테이지 번호, 실패율]
  let list = [];
  for (let i = 0; i < n; i++) {
    const total = passCount[i] + failCount[i];
    const rate = total === 0 ? 0 : failCount[i] / total;
    list.push([i + 1, rate]);
  }

  //실패율 내림차순
  list.sort((a, b) => {
    if (b[1] === a[1]) return a[0] - b[0]; //실패율이 같으면 번호 작은순
    return b[1] - a[1];
  });

  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(list[i][0]);
  }
  return result;
}
//test 통과 시간
// 테스트 21 〉	통과 (2.09ms, 51.1MB)
// 테스트 22 〉	통과 (197.24ms, 54.9MB)
// 테스트 23 〉	통과 (3.25ms, 54.2MB)
// 테스트 24 〉	통과 (7.93ms, 54.3MB)

//시간초과 대비 시간더 단축하도록. 각 스테이지 머문 사람 먼저 카운트
function solution(n, stages) {
  //각 스테이지 머물러 있는 도전자 수 집계
  let challenger = new Array(n + 2).fill(0);
  for (let stage of stages) {
    challenger[stage]++;
  }

  //1번 스테이지부터 남은 총 도달 인원으로 실패율 계산
  let list = [];
  let total = stages.length;
  for (let i = 1; i <= n; i++) {
    const rate = total === 0 ? 0 : challenger[i] / total;
    list.push([i, rate]);
    total -= challenger[i]; //다음 스테이지 도달 인원은 현재 탈락자 뺀 인원
  }

  //실패율 내림차순
  list.sort((a, b) => {
    if (b[1] === a[1]) return a[0] - b[0]; //실패율이 같으면 번호 작은순
    return b[1] - a[1];
  });

  return list.map((item) => item[0]);
}
//test 통과 시간
// 테스트 21 〉	통과 (2.25ms, 53.4MB)
// 테스트 22 〉	통과 (3.15ms, 56.1MB)
// 테스트 23 〉	통과 (3.22ms, 55.5MB)
// 테스트 24 〉	통과 (3.16ms, 55.6MB)
