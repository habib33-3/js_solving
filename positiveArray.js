function positiveArray(arr) {
  let positive = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
      positive.push(arr[i]);
    } else {
      break;
    }
  }
  return positive;
}

let arr = [22, 33, 77, -8];
let positive = positiveArray(arr);

console.log(positive);
