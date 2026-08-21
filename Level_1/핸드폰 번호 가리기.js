function solution(phone_number) {
  const hidden = "*".repeat(phone_number.slice(0, -4).length);
  const visible = phone_number.slice(-4);

  return hidden + visible;
}
