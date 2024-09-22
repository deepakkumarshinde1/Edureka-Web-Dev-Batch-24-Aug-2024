$(function () {
  let toggleBox = true;
  setTimeout(function () {
    $(".query-box").animate(
      {
        bottom: "0px",
      },
      500
    );
  }, 2000);

  $(".query-box > p").on("click", function () {
    $(".query-box").animate(
      {
        bottom: toggleBox ? "-230px" : "0px",
      },
      500
    );
    if (toggleBox) $(".make-rotation").addClass("rotate");
    else $(".make-rotation").removeClass("rotate");

    toggleBox = !toggleBox;
  });

  $("#submitQuery").on("click", function () {
    let data = $("#userQuery").serializeArray();
    let sendData = {};
    data.forEach(function (formInput) {
      sendData[formInput.name] = formInput.value;
    });

    console.log(sendData);
  });
});

// 1s === 1000 ms
