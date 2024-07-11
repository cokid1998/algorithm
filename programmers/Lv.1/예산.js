function solution(d, budget) {
  let count = 0;
  d = d.sort((a, b) => a - b);
  for (let i = 0; budget >= d[i]; i++) {
    budget -= d[i];
    count++;
  }
  return count;
}

solution([1, 3, 2, 5, 4], 9);
