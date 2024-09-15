// Object Literal
const mobile = {
  brand: "Samsung",
  price: 25000,
  color: "Black",
  camera: "12MP",
  isNew: true,
};

// For-of loop used for array
// For-in loop used for object
console.log("Run 1");
for (const propertyName in mobile) {
  // Will log each propertyName of the object
  console.log(propertyName);
  // Will log each propertyValue corresponding to propertyName of the object
  console.log(mobile[propertyName]);
}

// Can use the Object.keys(objectName)
// to get an array of the key names of the object
// Then we can use for-of loop to iterate over the array
// containing keyNames and log the corresponding values
console.log("Run 2");
const mobileKeys = Object.keys(mobile);
for (const key of mobileKeys) {
  console.log(key, ":", mobile[key]);
}
