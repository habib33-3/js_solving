function paperRequirements(firstBookCopy, secondBookCopy, thirdBookCopy) {
  let totalPaperRequired =
    firstBookCopy * 100 + secondBookCopy * 200 + thirdBookCopy * 300;

  return totalPaperRequired;
}

let firstBookCopy = 20;
let secondBookCopy = 20;
let thirdBookCopy = 20;

let paperRequired = paperRequirements(
  firstBookCopy,
  secondBookCopy,
  thirdBookCopy
);

console.log(paperRequired);
