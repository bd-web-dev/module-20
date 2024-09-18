// Check whether a string contains all the vowels a, e, i, o, u

// let test_string = "a";
// let test_string = "ae";
// let test_string = "aei";
// let test_string = "aeio";
let test_string = "aeiou";

let contains_a = test_string.includes("a");
let contains_e = test_string.includes("e");
let contains_i = test_string.includes("i");
let contains_o = test_string.includes("o");
let contains_u = test_string.includes("u");

let contains_all_vowels =
  contains_a && contains_e && contains_i && contains_o && contains_u;

console.log(
  "Does the string contains all the vowels a, e, i, o, u? :",
  contains_all_vowels
);
