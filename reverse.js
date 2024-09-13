const sentence = "I am learning Web Dev.";
// const result = ".veD beW gninrael ma I";

// Using the fact that strings have indexes
// Characters can be retrieved like an array
// Reverse each substring separately
// Web
// W
// eW
// beW
// Donald
// D
// oD
// noD
// anoD
// lanoD
// dlanoD
// Using for-of loop
let reverse = "";
console.log("Run 1");

for (const letter of sentence) {
  console.log(letter);
  reverse = letter + reverse;
}
console.log(reverse);

// Basic for loop
reverse = "";
console.log("Run 2");

for (let i = 0; i < sentence.length; i++) {
  console.log(i);
  console.log(sentence[i]);
  const letter = sentence[i];
  reverse = letter + reverse;
}
console.log(reverse);

// Shortcut
let reverseSentence = sentence;
// Original sentence
console.log(reverseSentence);
// Split by character and place in array
reverseSentence = sentence.split("");
console.log(reverseSentence);
// Reverse elements of array
reverseSentence = reverseSentence.reverse();
console.log(reverseSentence);
// Join with no separator in between. Place an empty string
// Default without any arguments is comma as separator
reverseSentence = reverseSentence.join("");
console.log(reverseSentence);
