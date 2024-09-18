// If a given string has either x, replace x by y.
// If the given string has X, replace it by Y.
// Hint: You should be able to check whether x or X exists.
// After that, search online how to replace a character in a string.

let test_string = "xxxXXXxxx";

for (let index = 0; index < test_string.length; index++) {
  let char = test_string[index];
  if (char === "x") {
    test_string =
      test_string.substring(0, index) + "y" + test_string.substring(index + 1);
  } else if (char === "X") {
    test_string =
      test_string.substring(0, index) + "Y" + test_string.substring(index + 1);
  }
}

console.log(test_string);
