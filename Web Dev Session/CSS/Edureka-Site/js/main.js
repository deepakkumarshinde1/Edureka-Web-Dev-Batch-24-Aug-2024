let text = 20;
text = 40;

const pie = 22 / 7;
// pie = 2;

const a = 0;
function fun(text) {
  console.log(text);
} // function definition

fun(typeof "deepak");
fun(typeof 20);
fun(typeof true);
fun(typeof null);

// string , number, boolean , object (array), undefined
let text2;
console.log(typeof text2);

console.clear();

// dom -> document object model
// manipulation on html with javascript
// logical representation of html
let btn = document.querySelector("#btn");
let countElement = document.querySelector("#count");
let counter = 0;

btn.addEventListener("click", function () {
  counter++;
  countElement.innerHTML = counter;
  // callback function / inline function
});
