function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    let tmp = 0;
    for (let j = 1; j <= right; j++) {
      if (i % j === 0) {
        tmp++;
      }
    }
    !(tmp % 2) ? (answer += i) : (answer -= i);
  }

  return answer;
}

solution(13, 17);
