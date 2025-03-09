// popup
// test the code
console.log("This is a console message");
console.log(1234);
console.log("aasdas", 10, 20, 30, 405, 0);

console.clear();

console.log(varName);
// hoisting => var
// data type
// es5
var varName = "Edureka"; // string
var varNumber = 12345; // number
var varFloat = 1234.5678; // number
var isValid = true; // boolean

// es6
let varName1 = "Deepakkumar"; // string
let varNumber1 = 12345; // number
varNumber1 = 1.2; // number

const pie = 13.4; // number
let text; //undefined
console.log(typeof text);
text = "deepak"; // string
console.log(text.length);
console.log(typeof text);
text = 1; // number
console.log(typeof text);
text = true; // boolean
console.log(typeof text);
const radius = 10;

// Primitive => string , number , boolean , undefine , null (value)

// Non-Primitive => object => array , object , function (reference)

let array = [10, 20, 30, 40];
// array methods
console.log(array);

function add(a = 0, b = 0) {
  let result = a + b;
  return result; // NaN
} // function definition

let r1 = add(10, "text"); // function call
console.log("Result of addition is : ", r1);
let r2 = add(1, 1); // function call
console.log("Result of addition is : ", r2);
let r3 = add(1.5, 1.5); // function call
console.log("Result of addition is : ", r3);

// 5 functions
// function definition
function funOne() {
  // code
}
// function expression
let t1 = function (a, b) {};
t1(10, 20);
// function expression with arrow
let t2 = () => {};

// callback function
function fun3(a, b, callback) {
  let result = a + b;
  callback(result);
}

let a1 = 10;
fun3(a1, 20, function (r) {
  console.log("callback result ", r);
});

fun3(a1, 20, (r) => {
  console.log("callback result ", r);
});

fun3(0.5, 0.6, (r) => {
  console.log(r * 10);
});
// arrow function
// Immediate Invoke Function Expression

function fun4() {
  // code
}

fun4();

(function (a, b, c) {
  console.log(a + b + c);
})(10, 20, 30);
