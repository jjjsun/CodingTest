function solution(nums) {
  nums.sort();
  const numsLength = nums.length / 2;
  let numsCount = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      numsCount++;
    }
  }
  if (numsCount >= numsLength) {
    numsCount = numsLength;
  }
  return numsCount;
}
