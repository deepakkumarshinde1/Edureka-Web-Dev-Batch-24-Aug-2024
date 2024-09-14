let closeForm = document.querySelector("#close-form");
let popUpArea = document.querySelector(".pop-up");
let signUpButton = document.querySelector(".sign-up");
let userRegistrationForm = document.querySelector("#user-registration-form");
let saveFormButton = document.querySelector(".submit");

let userList = localStorage.getItem("user-list");
if (userList === null) {
  userList = [];
} else {
  // converts preserve string to object
  userList = JSON.parse(userList);
}
console.log(userList);

closeForm.addEventListener("click", function () {
  popUpArea.classList.add("d-none");
});

signUpButton.addEventListener("click", function () {
  popUpArea.classList.remove("d-none");
});

saveFormButton.addEventListener("click", function (event) {
  let newUser = {};

  let form = new FormData(userRegistrationForm);
  form.forEach(function (value, name) {
    newUser[name] = value;
  });

  userList.push(newUser);

  // save
  //  convert a object to a preserver string ==> JSON.stringify
  localStorage.setItem("user-list", JSON.stringify(userList));
  console.log(userList);
});

// value
// classList
// style
// innerHTML
