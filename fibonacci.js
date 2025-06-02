//fibonacci:0, 1, 1, 2, 3, 5, 8, 13, 21, 34 (next=sum of the privious 2 numbers)
// a. Fixed count
function* fibonacciCount(n) {
  let current = 0, next = 1;//first 2 numbers
  for (let i = 0; i < n; i++) {
    yield current;
    [current, next] = [next, current + next];
  }
}

// b. Max value
function* fibonacciMax(max) {
  let current= 0, next = 1;
  while (current <= max) {
    yield current;
    [current, next] = [next, current + next];
  }
}

console.log([...fibonacciCount(7)]);
console.log([...fibonacciMax(20)]);
