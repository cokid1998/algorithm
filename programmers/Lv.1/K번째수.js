// [1, 5, 2, 6, 3, 7, 4]의 commands[i][0]번 째 부터 commands[i][1]번 째 수까지 자름
// 자른 숫자들 정렬
// 정렬된 숫자배열들 중 commands[i][2]번 째 수 를 answer배열에 push

function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    const sliceArr = array.slice(commands[i][0] - 1, commands[i][1]);
    sliceArr.sort((a, b) => a - b);
    answer.push(sliceArr[commands[i][2] - 1]);
  }

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
