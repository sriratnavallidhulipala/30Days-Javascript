const words = ["apple", "banana", "strawberry", "blueberry"];

let longestWord = "";

for (const word of words) {
  if (word.length > longestWord.length) {
    longestWord = word;
  }
}

console.log("The longest word is: " + longestWord);