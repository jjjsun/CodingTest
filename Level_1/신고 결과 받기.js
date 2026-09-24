//첫 시도 -> 실패. 타입에러
// function solution(id_list, report, k){

//     let result = [];
//     const reportCount = {};
//     const reportResultEmail = {};
//     for (const name of id_list){
//         reportCount[name] = 0;
//         reportResultEmail[name] = "";
//         result.push(0);
//     }
//     for (const name of id_list){}
//     for (let i = 0; i < report.length; i++){
//         const [userId, reportId] = report[i].split(" ");
//         reportCount[reportId]++;
//         reportResultEmail[userId] += (reportId + " ");
//     }

//     for (const report of reportCount){
//         if (reportCount[report] >= k){
//             for (let i = 0; reportResultEmail.length; i++){
//                 if (reportResultEmail[i] === report){
//                     result[i]++;
//                 }
//             }
//         }
//     }
//     return result;
// }

//두번째 시도 성공
function solution(id_list, report, k) {
  let result = [];
  const reportCount = {};
  const reportResultEmail = {};

  //1. 초기화(카운트 0, 신고 목록은 빈 배열, 결과는 0)
  for (const name of id_list) {
    reportCount[name] = 0;
    reportResultEmail[name] = [];
    result.push(0);
  }

  //2. 중복 신고 제거
  const uniqueReports = [...new Set(report)];

  for (let i = 0; i < uniqueReports.length; i++) {
    const [userId, reportId] = uniqueReports[i].split(" ");
    //신고당한 횟수 누적
    reportCount[reportId]++;
    //유저가 신고한 대상 추가
    reportResultEmail[userId].push(reportId);
  }

  //3. k번 이상 신고당한 유저를 찾아 메일 발송 횟수 계산
  for (const user in reportCount) {
    if (reportCount[user] >= k) {
      for (let i = 0; i < id_list.length; i++) {
        const reporter = id_list[i];

        //해당 유저가 정지당한 user를 신고한 적이 있으면 메일 카운트 +1
        if (reportResultEmail[reporter].includes(user)) {
          result[i]++;
        }
      }
    }
  }
  return result;
}
