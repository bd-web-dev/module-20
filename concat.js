const firstName = "Abid";
const lastName = "Nabid";
// No whitespace in between
let fullName = firstName + lastName;
console.log(fullName);
// Whitespace using + ' '
// 3 strings joined: firstName, " " and lastName
fullName = firstName + " " + lastName;
console.log(fullName);

// No whitespace in between
let fullName2 = firstName.concat(lastName);
console.log(fullName2);
// Chaining concat() calls
fullName2 = firstName.concat(" ").concat(lastName);
console.log(fullName2);
// Comma separated value list provided to concat() call
fullName2 = firstName.concat(" ", lastName);
console.log(fullName2);

// Includes
console.log(lastName.includes("d"));
console.log(lastName.includes("x"));
console.log(lastName.includes("bid"));
