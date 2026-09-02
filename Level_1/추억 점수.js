//photo안에 각 배열별로 각 배열의 인덱스의 값이 name에 있으면 index값 가져오고. 그 인덱스값 그대로 yearning 인덱스에 넣어서 값 추가.
// function solution(name, yearning, photo){
//     let result = [];
//     for(let i = 0; i < photo.length; i++){
//         let count = 0;
//         for (let j = 0; j < photo[i].length; j++){
//             let index = name.indexOf(photo[i][j]);
//             if (index !== -1) {
//                 count += yearning[index];
//             }
//         }
//         result.push(count);
//     }
//     return result;
// }
//name.indexOf(이름): name배열안에서 "이름"의 index를 리턴.
//만약 없으면 -1이 출력됨

//count랑 result.push없애고 미리 배열만들어 놓고 각 인덱스에 직접 점수추가

function solution(name, yearning, photo) {
  let result = new Array(photo.length).fill(0);
  for (let i = 0; i < photo.length; i++) {
    for (let j = 0; j < photo[i].length; j++) {
      let index = name.indexOf(photo[i][j]);
      if (index !== -1) {
        result[i] += yearning[index];
      }
    }
  }
  return result;
}
