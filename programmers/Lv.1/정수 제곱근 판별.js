// 부동 소수점으로 인한 이슈 주의
// Math.floor나 Number.isInteger를 통해서 해결 가능

function solution(n) {
  let i = Math.floor(Math.sqrt(n));

  if (i * i === n) {
    return (i + 1) * (i + 1);
  }

  return -1;
}

console.log(solution(121));
