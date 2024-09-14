let person = {
  name: "Sodor Uddin",
  age: 25,
  profession: "Developer",
  salary: 25000,
  isMarried: true,
};

console.log(person);
// Accessing specific properties
// Dot notation
// Using dot operator .
// objectName.propertyName
console.log(person.profession);
const income = person.salary;
console.log(income);

// Bracket notation
// Using third bracket [] and "" enclosing propertyName inside
// objectName["propertyName"]
const boyosh = person["age"];
console.log(boyosh);
// Cannot use dot notation when propertyName has following:
// Dash, space
person = {
  name: "Sodor Uddin",
  age: 25,
  profession: "Developer",
  salary: 25000,
  isMarried: true,
  //   Need "" when propertyName has space character
  //   Otherwise propertyName is invalid due to space character
  "favorite places": ["Bandorban", "Saint Martin", "Kuakata"],
};

// Following comment is invalid way to access propertyName of "favorite places"
// So cannot use dot notation to access such propertyName
// where space character or dash character is present
// console.log(person."favorite places");
console.log(person["favorite places"]);

// We can have propertyName, that we want to access,
// stored in a variable
// Instead of person["profession"]
// We have to do the following:
const propertyAccess = "profession";
console.log(person[propertyAccess]);
// Cannot do above with dot notation
// console.log(person.propertyAccess); prints UNDEFINED
