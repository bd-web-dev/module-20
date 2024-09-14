// Primitives
// Basic, primary or lowest-level data types
const age = 21;
const school = "Rifles Square";
const isPassed = true;
// Undefined value for variable below
let isDeveloper;
console.log(isDeveloper);
const subjects = ["Bangla", "English", "Physics", "Math"];

// An item cannot be fully desribed using array
// We can place the values inside an array but it remains unclear
// as to which value means what.
const bottleUsingArray = ["white", 45];
// Can use separate variables but they are all scattered throughout
const bottleColor = "white";
const bottlePrice = 45;
const bottleDrink = "water";

// Ways to declare an object
// Contains a set of key-value pairs
// A key-value pair is property name and property value
// Order of key-value pairs do not matter
const bottle = {
  // 4 parts
  // 1. Property name 2. Colon 3. Property value 4. Comma
  // property name: property value,
  brand: "apple",
  price: 45,
  color: "white",
  isClean: false,
};
console.log(bottle);

// Property values can also be arrays and other objects
// Objects are also called non-primitives
// Composite data type containing other data types
// These include number, string, boolean, array, object
const subject = {
  name: "Biology",
  teacher: "Rasheda Mam",
  examDate: "30 Feb",
  chapters: ["First Chapter", "Second Chapter", "Third Chapter"],
  exams: {
    name: "Final Exam",
    marks: 100,
  },
};
