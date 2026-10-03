function solution(want, number, discount) {
  let result = 0;
  let totalCount = 0;
  for (const num of number) {
    totalCount += Number(num);
  }

  let wantItemList = [];
  for (let i = 0; i < number.length; i++) {
    for (let j = 0; j < number[i]; j++) {
      wantItemList.push(want[i]);
    }
  }

  for (let i = 0; i <= discount.length - totalCount; i++) {
    //할인가격으로 상품구매 가능한지 체크
    let isPossible = true;
    let checkDiscountList = discount.slice(i, totalCount + i);

    for (let j = 0; j < want.length; j++) {
      if (
        wantItemList.filter((item) => item === want[j]).length !==
        checkDiscountList.filter((item) => item === want[j]).length
      ) {
        isPossible = false;
        break;
      }
    }
    if (isPossible) {
      result++;
    }
  }
  //원하는 상품을 할인가격으로 살수있는 날 카운트 출력
  return result;
}
