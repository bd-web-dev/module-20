// Capitalize Every first Letter of each word in a String

let testString = "capitalize every first letter of each word in a string";

let wordsOfString = testString.split(" ");

for (let i = 0; i < wordsOfString.length; i++) {
  let word = wordsOfString[i];
  let wordFirstLetter = word[0];
  wordsOfString[i] = wordFirstLetter.toUpperCase() + word.substring(1);
}

let reformTestString = wordsOfString.join(" ");
console.log(
  "Capitalized Every First Letter Of Each Word In A String: ",
  reformTestString
);
