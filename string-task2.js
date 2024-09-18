// Count how many times a string has the letter a or A

let test_string = "AaaaaA";
let count_of_a_or_A = 0;

for (let i = 0; i < test_string.length; i++) {
  let char = test_string[i];
  if (char === "a" || char === "A") {
    count_of_a_or_A++;
  }
}

console.log(
  "How many times does the string have the letter a or A? :",
  count_of_a_or_A
);
