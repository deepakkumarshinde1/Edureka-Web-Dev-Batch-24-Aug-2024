let a = 10;
a = 20;
const pie = 3.14;

let b = null;
const course = "React";
console.log(a);
console.log(pie);
console.clear();
console.log(b, course, "hello", 30, 30.3, true, null);
console.log(2 + 2);

// string, number , boolean,
// object ( null , array , function , jsObject)
// undefined
let isPresent;
const text = "";

console.log(b);

let role = null;
let subscription = role ?? "Guest";

console.log(subscription);

// array
let productNames = [["HP", 42000], "Lenovo", "Dell", "Apple"];
let arrayLength = productNames.length;
console.log(productNames);

//jsObject
// jsObjectArray => JSON Array
// JSON => Javascript Object Notation
let products = [
  {
    brand: "HP",
    price: 42000,
  },
  {
    brand: "Dell",
    price: 40000,
  },
  {
    brand: "Apple",
    price: 142000,
  },
];

console.log(products);

console.clear();
// functions
// add 2 number
// [ ES5 & ES6 ]
let a1 = 10;

let b1 = 20;
function add(a = 0, b = 0) {
  let result = a + b; // Not a Number (NaN)
  // template string

  let resultText = `Result is ${a} + ${b}=${result}`;
  console.log(resultText);
}

add();

let array = [10, 20, 30, 40, 50, 60];
// create a variable to store 10
let n1 = array[0];
// create a variable to store 20
let n2 = array[1];
// create a array to store remain element
let restArray = array.slice(2);
console.log(n1, n2, restArray);
console.clear();

let array1 = [10, 20, 30, 40, 50, 60];

// destructuring => ES6
let [x1, x2, ...restArray1] = array1; // ... (rest)
console.log(x1, x2, restArray1);

// spread operator
let array_1 = [10, 20, 30];
let array_2 = [100, 200, 300];
// marg => creating deep copy
let newArray = [...array_1, ...array_2];
console.log(newArray);

// arrow function in javascript
function add(a, b) {} // general function
add();

let add_2 = function (a, b) {
  console.log(this);
}; // function expression
// own context (this)

class Human {
  printData() {
    let add_1 = (a, b) => {
      console.log(this);
    }; // function expression

    add_1();
  }
}

// don't have there own context
add_2();
let human = new Human();
human.printData();

function Add(a, b) {
  console.log("first");
}

function Add(a, b, c) {
  console.log("second");
}

function Xyz() {
  Add(10, 10);
}

Add(10, 20);
