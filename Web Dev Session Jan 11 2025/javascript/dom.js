// DOM => Document Object Model

// Logical representation of html code

// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();

// document.querySelector("input"); // single
// document.querySelectorAll("input"); // [list]

let inputOne = document.querySelector("#input-one");
let inputTwo = document.querySelector("#input-two");
let button = document.querySelector("#add-btn");
let resultText = document.querySelector("#result");
// prop & method
console.log(inputOne);
console.log(inputTwo);
console.log(button);
console.log(resultText);

console.log(inputOne);

button.addEventListener("click", function () {
  try {
    if (inputOne.value.length === 0 || inputTwo.value.length === 0) {
      throw new Error("provide a number");
    }
    let valueOne = +inputOne.value;
    let valueTwo = +inputTwo.value;

    if (isNaN(valueOne) || isNaN(valueTwo)) {
      throw new Error("Input must be a number");
    }

    let result = valueOne + valueTwo;
    resultText.innerHTML = `<b>The addition of ${valueOne} and ${valueTwo} is <u> ${result} </u></b>`;
  } catch (error) {
    Swal.fire({
      title: "Warning!",
      text: error.message,
      icon: "warning",
      confirmButtonText: "Ok",
    });
  }
});
