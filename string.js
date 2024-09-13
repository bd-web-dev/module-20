// 4 ways of declaring a string
// First way: using single quotes: converted to double by Prettier
const country = "Bangladesh";
console.log(country);
console.log(typeof country);
// Second way: using double quotes
const division = "New Khal e";
console.log(division);
console.log(typeof division);
// Third way: using backticks
const district = `B-Baria`;
console.log(district);
console.log(typeof district);
// Fourth way: using String constructor
const thana = new String("Demra");
console.log(thana);
console.log(typeof thana);

// Strings are similar to arrays
const numbers = [54, 98, 78, 21, 65];
console.log("Numbers array: ", numbers);
console.log("Length of numbers array: " + numbers.length);
console.log("0th index or 1st element of numbers: " + numbers[0]);
console.log("1st index or 2nd element of numbers: " + numbers[1]);
// Arrays are mutable
numbers[1] = 11;
console.log("Updated Numbers array: ", numbers);

let capital = "Dhaka";
console.log("Capital string: " + capital);
console.log("Length of capital string: " + capital.length);
// Added space character results in length increase
// Length denotes number of positions used
capital = "Dha ka";
console.log("Length of capital string with space: " + capital.length);
capital = "Dha  ka";
// Length will include the new added whitespace
console.log("Length of capital string with 2 spaces: " + capital.length);
// Element access using string index
console.log("0th index of capital string: " + capital[0]);
console.log("1st index of capital string: " + capital[1]);
console.log("2nd index of capital string: " + capital[2]);
// Strings are immutable so following will not work
console.log(capital);
capital[0] = "C";
console.log(capital);
