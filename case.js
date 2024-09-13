const school = "RAJ UK Uttara Model School";
console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject = "Chemistry";
const book = "ChemIsTry";

// Strings are case-sensitive
// uppercase: ABCD EFGH
// lowercase: abcd efgh
console.log("Run 1: Without making both strings same case.");
if (subject === book) {
  console.log("I am reading book eibar porikkhay fatay falabo.");
} else {
  console.log("Hudai hudai prishtha ultai ar bhaat khawar jonno opekkha kori");
}

console.log("Run 2: After making both strings lowercase.");
if (subject.toLowerCase() === book.toLowerCase()) {
  console.log("I am reading book eibar porikkhay fatay falabo.");
} else {
  console.log("Hudai hudai prishtha ultai ar bhaat khawar jonno opekkha kori");
}

let drink = "water";
let liquid = "water";
console.log("Run 1: Both are exactly same strings.");
if (drink === liquid) {
  console.log("Pani er opor nam life.");
} else {
  console.log("Shomudre pani ase khaite parina. Lobonakto pani.");
}

drink = "   water";
liquid = "water   ";
console.log(
  "Run 2: drink has leading whitespace, water has trailing whitespace."
);
if (drink === liquid) {
  console.log("Pani er opor nam life.");
} else {
  console.log("Shomudre pani ase khaite parina. Lobonakto pani.");
}

drink = "   water";
liquid = "water   ";
console.log("Run 3: Whitespace in both strings have been trimmed.");
if (drink.trim() === liquid.trim()) {
  console.log("Pani er opor nam life.");
} else {
  console.log("Shomudre pani ase khaite parina. Lobonakto pani.");
}

drink = "   wa ter";
liquid = "water   ";
console.log(
  "Run 4: Whitespace in both strings have been trimmed. But whitespace in between wa and ter in drink cannot be trimmed."
);
if (drink.trim() === liquid.trim()) {
  console.log("Pani er opor nam life.");
} else {
  console.log("Shomudre pani ase khaite parina. Lobonakto pani.");
}
