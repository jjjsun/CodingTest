function solution(n, m) {
  let gcd = 1;
  for (let i = Math.min(n, m); i >= 1; i--) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
      break;
    }
  }

  const lcm = (n * m) / gcd;
  return [gcd, lcm];
}
