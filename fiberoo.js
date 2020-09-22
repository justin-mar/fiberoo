function fib() {
  const num = [0, 1];
  for (let i = 2; i < 50; i++) {
    num[i] = num[i - 1] + num[i - 2];
  }
  return num;
}

console.log(fib());

function numToStrings(arr) {
  return _.map(arr, String);
}

console.log(numToStrings(fib()));
