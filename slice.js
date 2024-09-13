const address = "andorKilla";
// Slice parameters(param1, param2)
// Means start at param1, include it and end before param2
// Include upto index (param2 - 1)
// To get substring of "dor", index 2 to 4
const part1 = address.slice(2, 5);
console.log(part1);

const sentence = "Web development demands knowledge of CSS and JS.";
// Statement below keeps the entire string as it is, no substrings
// The one string shows up as a single element of an array
console.log("Run 1");
console.log(sentence.split());
// Splits string character by character
console.log("Run 2");
console.log(sentence.split(""));
// Splits into substrings separated by space character
console.log("Run 3");
console.log(sentence.split(" "));
// Splits into substrings separated by character 'a'
console.log("Run 4");
console.log(sentence.split("e"));

// Converting strings to array containing substrings by separator ", "
const friendsStr = "Rahim, Kahim, Dahim, Lahim, Fahim, Sahim";
const friendsArr = friendsStr.split(", ");
console.log(friendsArr);

// Convert array to string
// Default join joins elements of array and
// produces a string with elements separated them by comma
let originalFriendsStr = friendsArr.join();
console.log(originalFriendsStr);
// Joins using |
originalFriendsStr = friendsArr.join("|");
console.log(originalFriendsStr);
// Joins using -
originalFriendsStr = friendsArr.join("-");
console.log(originalFriendsStr);
// Joins using , followed by space
originalFriendsStr = friendsArr.join(", ");
console.log(originalFriendsStr);
