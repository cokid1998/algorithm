function solution(arr, divisor) {
  let result = arr
    .filter((el) => {
      if (!(el % divisor)) {
        return el;
      }
    })
    .sort((a, b) => a - b);

  return result.length ? result : [-1];
}

solution([5, 9, 7, 10], 5);
