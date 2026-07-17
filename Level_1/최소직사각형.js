function solution(sizes) {
  for (let i = 0; i < sizes.length; i++) {
    let temp = 0;
    if (sizes[i][0] < sizes[i][1]) {
      temp = sizes[i][0];
      sizes[i][0] = sizes[i][1];
      sizes[i][1] = temp;
    }
  }
  let xMax = 0;
  let yMax = 0;
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > xMax) {
      xMax = sizes[i][0];
    }
    if (sizes[i][1] > yMax) {
      yMax = sizes[i][1];
    }
  }
  return xMax * yMax;
}
