window.addEventListener("load", function () {
  let btn = document.querySelector("#btn");
  let h1Text = document.querySelector("#h1-text");

  btn.addEventListener("click", function () {
    h1Text.innerHTML = "edureka";
  });
});

$(function () {
  $("#btn").click(function () {
    $("#h1-text").html("edureka");
  });
});

// $();
// $(function(){})

// $('#id');

// $('h1');

// $('.class');

// methods
// .click()
// .on()
// .html()
// .css()
// .animate()

$.ajax().done().fail();
