function solution(a, b) {
  if (a === b) return a;
  let big = a > b ? a : b;
  let small = a < b ? a : b;
  let sum = 0;
  for (let i = small; i < big + 1; i++) {
    sum += i;
  }
  return sum;
}

console.log(solution(3, 5));
console.log(solution(5, 3));

// 가우스의 공식
function solution(a, b) {
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}

// 수열의 합
// ((첫 번째 숫자 + 마지막 숫자) / 2) * 숫자의 개수
// 숫자의 개수는 (최소값 + 최대값 - 1)
// 즉 (첫 번째 숫자 + 마지막 숫자) * (최소값 + 최대값 + 1)
