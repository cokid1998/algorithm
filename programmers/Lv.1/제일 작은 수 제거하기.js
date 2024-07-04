function solution(arr) {
  if (arr.length === 1) return [-1];
  let result = [];
  let small = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (small > arr[i]) {
      small = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (small !== arr[i]) {
      result.push(arr[i]);
    }
  }

  return result;
}

// 메소드를 통한 코드 간소화
function solution(arr) {
  const min = Math.min(...arr);
  return arr.length === 1 ? [-1] : arr.filter((i) => i !== min);
}
