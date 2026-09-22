//.shift()  배열 맨앞제거

function solution(bandage, health, attacks) {
  let curheal = health;
  let lastAttack = attacks[attacks.length - 1][0];
  let successCount = 0;
  for (let i = 1; i <= lastAttack; i++) {
    //공격시간
    if (attacks.length > 0 && i == attacks[0][0]) {
      curheal -= attacks[0][1];
      attacks.shift();
      successCount = 0;

      if (curheal <= 0) return -1;
    }

    //치유시간
    else {
      successCount++;
      //추가힐 다 찼을때
      if (successCount == bandage[0]) {
        curheal += bandage[1] + bandage[2];
        successCount = 0;
      }
      //기본회복량만
      else {
        curheal += bandage[1];
      }
      if (curheal > health) {
        curheal = health;
      }
    }
  }
  return curheal;
}
