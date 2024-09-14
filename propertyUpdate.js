let person = {
  name: "Sodor Uddin",
  age: 25,
  profession: "Developer",
  salary: 25000,
  isMarried: true,
  "favorite places": ["Bandorban", "Saint Martin", "Kuakata"],
};

console.log("Run 1");
console.log(person);

console.log("Run 2");
person.salary = 30000;
console.log(person);

console.log("Run 3");
person["age"] = 26;
console.log(person);

console.log("Run 4");
person["favorite places"] = ["Maldives", "Bali", "Pattaya"];
console.log(person);

console.log("Run 5");
const propertyUpdate = "profession";
person[propertyUpdate] = "DevOps";
console.log(person);
