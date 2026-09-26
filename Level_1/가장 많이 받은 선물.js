// //첫 시도 -> 실패. 중간로직 꼬임
// //give + take
// function solution(friends, gifts) {
//     const giftIndex = {};
//     const takenGiftList = {};

//     //초기화 (맨처음 0)
//     for (const name of friends){
//         giftIndex[name] = 0;
//         takenGiftList[name] = [];
//     }

//     //선물주고받기 기록
//     for (let i = 0; i < gifts.length; i++){
//         const [giveMember, takenMember] = gifts[i].split(" ");
//         giftIndex[giveMember]++;
//         giftIndex[takenMember]--;
//         takenGiftList[giveMember].push(takenMember);
//     }

//     let maxGift = 0;
//     for (let i = 0; i < friends.length - 1; i++){
//         const Member1 = friends[i];
//         let MemberGiftCount = 0;
//         for (let j = i+1; j < friends.length; j++){
//             const Member2 = friends[j];
//             let Member1giveMember2Count = 0;
//             let Member2giveMember1Count = 0;
//             if (takenGiftList[Member1].includes(Member2) || takenGiftList[Member2].includes(Member1)){
//                 for (let i = 0; i < takenGiftList[Member1].length; i++){
//                     if (takenGiftList[Member1][i] === Member2){
//                         Member1giveMember2Count++;
//                     }
//                 }
//                 for (let i = 0; i < takenGiftList[Member1].length; i++){
//                     if (takenGiftList[Member2][i] === Member1){
//                         Member2giveMember1Count++;
//                     }
//                 }
//                 if (Member1giveMember2Count > )
//             }
//             else if (takenGiftList[Member2].includes(Member1)){

//             }
//         }
//     }
// }

//두번째 시도 -> 성공
function solution(friends, gifts) {
  const len = friends.length;

  //1. 이름 -> 인덱스 번호 매핑
  const nameMap = {};
  friends.forEach((name, idx) => {
    nameMap[name] = idx;
  });

  //2. 자료구조 초기화
  //giftTable[i][j] = i가 j에게 준 선물 수
  const giftTable = Array.from({ length: len }, () => Array(len).fill(0));

  //선물지수
  const giftScore = new Array(len).fill(0);

  //다음달 받을 선물 수
  const nextGifts = new Array(len).fill(0);

  //기록 채우기
  for (const record of gifts) {
    const [giver, recevier] = record.split(" ");
    const gIdx = nameMap[giver];
    const rIdx = nameMap[recevier];

    giftTable[gIdx][rIdx]++;
    giftScore[gIdx]++;
    giftScore[rIdx]--;
  }

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      const iGavej = giftTable[i][j];
      const jGavei = giftTable[j][i];

      //주고받은 수가 다를때
      if (iGavej > jGavei) {
        nextGifts[i]++;
      } else if (iGavej < jGavei) {
        nextGifts[j]++;
      }

      //주고 받은게 없을때
      else {
        if (giftScore[i] > giftScore[j]) {
          nextGifts[i]++;
        } else if (giftScore[i] < giftScore[j]) {
          nextGifts[j]++;
        }
      }
    }
  }

  return Math.max(...nextGifts);
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.20ms, 43.7MB)
// 테스트 2 〉	통과 (0.29ms, 43.3MB)
// 테스트 3 〉	통과 (0.32ms, 43.6MB)
// 테스트 4 〉	통과 (0.26ms, 43.9MB)
// 테스트 5 〉	통과 (0.82ms, 44.6MB)
// 테스트 6 〉	통과 (0.32ms, 43.8MB)
// 테스트 7 〉	통과 (0.67ms, 43.7MB)
// 테스트 8 〉	통과 (0.60ms, 43.6MB)
// 테스트 9 〉	통과 (2.95ms, 45.4MB)
// 테스트 10 〉	통과 (2.84ms, 45.3MB)
// 테스트 11 〉	통과 (4.69ms, 50.6MB)
// 테스트 12 〉	통과 (267.31ms, 50.9MB)
// 테스트 13 〉	통과 (116.27ms, 52MB)
// 테스트 14 〉	통과 (5.74ms, 51.7MB)
// 테스트 15 〉	통과 (4.56ms, 51.7MB)
// 테스트 16 〉	통과 (5.71ms, 46.4MB)
// 테스트 17 〉	통과 (0.22ms, 43.7MB)
// 테스트 18 〉	통과 (4.57ms, 50.9MB)
// 테스트 19 〉	통과 (3.93ms, 52.1MB)
// 테스트 20 〉	통과 (1.36ms, 45.1MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
