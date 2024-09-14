// How many keys does object have?
let computer = {
  brand: "Lenovo",
  price: 35000,
  processor: "Intel",
  hdd: "512GB",
};

let computerKeys = Object.keys(computer);
console.log(computerKeys);

computer = {
  brand: "Lenovo",
  price: 35000,
  processor: "Intel",
  hdd: "512GB",
  monitor: "HP",
};
computerKeys = Object.keys(computer);
console.log(computerKeys);
