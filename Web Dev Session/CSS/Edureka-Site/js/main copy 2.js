// arrays
let array = [10, 20, 30, 40];

// add
array.push(10, 20, 30);

console.log(array);

// delete
// array.splice(3, 1);
console.log(array);

// search
// find & filter

// only one data --> find --> result || undefined
let search = 10;
let isFound = array.find(function (value) {
  return search === value;
});
console.log(isFound);

// more the data --> filter --> [v,v,v] || []
let isFound2 = array.filter(function (value) {
  return search === value;
});
console.log(isFound2);
// object in js

// js object ==> key value , here key are user defined
let student = {
  name: "Deepak",
  rollNo: 10,
  age: 34,
  marks: 36,
};
// number of student
// array & object [{},{},{},{},{}]

// let search1 = "male";
// let searchResult = studentList.filter(function (value, index) {
//   return search1 === value.gender;
// });

// let studentName = searchResult.map(function (value, index) {
//   return `<li>${value.name}</li>`;
// });

// console.log(studentName.join(""));

let studentList = [
  { name: "Sam", age: 24, gender: "male" },
  { name: "Kumar", age: 22, gender: "male" },
  { name: "Varshita", age: 24, gender: "female" },
  { name: "Neha", age: 22, gender: "female" },
  { name: "Suraj", age: 29, gender: "male" },
];

let ul = document.getElementById("list");
let inputs = document.querySelectorAll(".get-gender-list");

inputs.forEach(function (input, index) {
  input.addEventListener("click", function () {
    if (input.checked === true) {
      setList(input);
    }
  });
});

function setList(input) {
  let search1 = input.value;
  let searchResult = studentList
    .filter(function (value, index) {
      return search1 === value.gender;
    })
    .map(function (value, index) {
      return `<li>${value.name}</li>`;
    })
    .join("");
  ul.innerHTML = searchResult;
}
