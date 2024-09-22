// $('function')
// $('selectors')
// $.functionName()

/**
 *   Element selector => h1 span
 *   Class selector => .className
 *   Id Selector => #idName
 *   Child Selector => pSelector > cSelector
 *   Descendant Selector =>  pSelector  cSelector
 *   Adjacent selector => pSelector + cSelector
 *   Attribute Selector  => selector[attr=value]
 *   General Sibling Selector => pSelector ~ cSelector
 *   Group Selector => selector,selector
 */

$(function () {
  //   $("#btn").on("click", function () {
  //     let text = $("#input-text").val();
  //     $(".changeText").html(text);
  //     $("#input-text").val(""); // reset input
  //   });

  //   $("#input-text").on("keyup", function () {
  //     let text = $("#input-text").val();
  //     $(".changeText").html(text);
  //   });

  let sampleArray = [];
  $("#btn").on("click", function () {
    let text = $("#input-text").val();
    sampleArray.push(text);
    $("#input-text").val(""); // rest input
    printData();
  });

  function printData() {
    let li = sampleArray
      .map(function (value, index) {
        return `<li>${value}</li>`;
      })
      .join("");

    $(".list").html(li);
  }
});
