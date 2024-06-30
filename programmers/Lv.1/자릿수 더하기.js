function solution(n) {
  let a = String(n);
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += Number(a[i]);
  }
  return sum;
}

// console.log(solution(123));
// console.log(solution(987));

// 숫자 풀이
function number(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
    console.log(n);
  }
}

console.log(number(123));
console.log(number(987));
