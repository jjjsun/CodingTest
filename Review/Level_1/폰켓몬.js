function solution(nums) {
  nums.sort((a, b) => a - b);
  let maxNums = nums.length / 2;
  let result = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1] && result < maxNums) {
      result++;
    }
  }
  return result;
}
