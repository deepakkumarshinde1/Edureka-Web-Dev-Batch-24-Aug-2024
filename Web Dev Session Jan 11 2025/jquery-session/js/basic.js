$(function () {});

$(elementObject);

$("button");
$(".button");
$("#button");
$("#button > span");

$("h1 + p");

$(elementObject);

//
$(elementObject).html("text or html");
$(elementObject).text("text");
$(elementObject).val("value");
$(elementObject).prop("src", "image_path");
$(elementObject).data("key", "value");
$(elementObject).on("event", function () {});
$(elementObject).addClass("className");
$(elementObject).removeClass("className");
$(elementObject).toggleClass("className");
$(elementObject).css("property", "value");
$(elementObject).css({ property: "value", property: "value" });
$(elementObject).parent();
$("button").children("span").html("text");
$(elementObject).find("selector");

// api
$.ajax().done().fail();

//
h1.style.color = "red";
h1.style.backgroundColor = "blue";

//$("h1").css({ color: "red", 'background-color': "blue" });
