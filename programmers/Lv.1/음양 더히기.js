function solution(absolutes, signs) {
  let sum = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      sum += absolutes[i];
    } else {
      sum -= absolutes[i];
    }
  }

  return sum;
}

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));

// 다른사람 풀이 삼항연산자 이용
function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  return answer;
}
