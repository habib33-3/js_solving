function bestFriend(arr) {
  let largest = "";
  for (const element of arr) {
    if (largest.length < element.length) {
      largest = element;
    }
  }
  return largest;
}

let arr = ["sam", "max", "Mike", "Samuel"];

let largest = bestFriend(arr);

console.log(largest);
