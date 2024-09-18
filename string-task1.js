// Count how many times a string has the letter a

let test_string = "AaaaaA";
let count_of_a = 0;

for (let i = 0; i < test_string.length; i++) {
  let char = test_string[i];
  if (char === "a") {
    count_of_a++;
  }
}

console.log("How many times does the string have the letter a? :", count_of_a);
