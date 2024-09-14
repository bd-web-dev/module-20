const college = {
  name: "Rajuk Uttara Model College",
  class: ["11", "12"],
  events: ["Science Fair", "Bijoy Dibosh", "21st February"],
  //   This property is another object itself
  unique: {
    color: "brown",
    result: {
      GPA: 5,
      meritLevel: "top",
    },
  },
};

console.log(college);
// Access property "name" using dot operator
console.log("Property 'name': ", college.name);
// Access property "unique" using dot operator
console.log("Property 'unique': ", college.unique);
// Chained dot operator for nested object property access
// Unique is an object nested inside college
// First access unique using dot operator
// Then access its property color by chaining dot operator
console.log("Property 'color' of property 'unique': ", college.unique.color);
// Similarly access property "result" of property "unique"
// Result is another object
console.log("Property 'result' of property 'unique': ", college.unique.result);
// Access property "meritLevel" of property "result" of property "unique"
console.log(
  "Property 'meritLevel' of property 'result' of property 'unique': ",
  college.unique.result.meritLevel
);
// Access same property using bracket operator
console.log(
  "Property 'meritLevel' of property 'result' of property 'unique' (Brackets): ",
  college["unique"]["result"]["meritLevel"]
);
// Change property "meritLevel" of nested object "result" of nested object "unique"
college.unique.result.meritLevel = "top top top most";
console.log(
  "Property 'meritLevel' of property 'result' of property 'unique': ",
  college.unique.result.meritLevel
);

// Log property "events" of college
console.log("Property 'events': ", college.events);
// Log 1st index element of property "events" of college object
console.log("1st index element of property 'events': ", college.events[1]);
// Change 1st index element of property "events" of college object
college.events[1] = "16th December";
console.log(
  "1st index element of property 'events' after update: ",
  college.events[1]
);
console.log(college);
// Delete property "class" of college object
delete college.class;
console.log("College object after deletion of property 'class': ", college);
