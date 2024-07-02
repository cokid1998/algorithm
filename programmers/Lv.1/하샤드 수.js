// 형변환
function solution(x) {
  let n = [...(x + "")];
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += +n[i];
  }

  return !(x % sum);
}

console.log(solution(18));

// 숫자연산
function solution(x) {
  let num = x;
  let sum = 0;
  do {
    sum += x % 10;
    x = Math.floor(x / 10);
  } while (x > 0);

  return !(num % sum);
}
