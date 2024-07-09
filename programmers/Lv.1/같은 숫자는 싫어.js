function solution(arr) {
  var answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

function solution(arr) {
  return arr.filter((item, idx) => item !== arr[idx + 1]);
}

solution([4, 4, 4, 3, 3]);
