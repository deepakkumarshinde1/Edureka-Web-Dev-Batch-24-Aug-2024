$(function () {
  let offerTime = 0;
  let hrs = 0;
  let min = 0;
  let sec = 0;

  let intervalNumber = null;
  function calcTime(_offerTime) {
    if (_offerTime === 0) {
      $(".timer").html(`0hr 0min 0sec`);
      clearInterval(intervalNumber);
      return false;
    }
    offerTime = _offerTime;
    hrs = Math.floor(offerTime / 60); // 1.9 => 1 , 1.1 => 1
    min = offerTime % 60;
    sec = 59;
    $(".timer").html(`${hrs}hr ${min}min ${sec}sec`);
  }

  function startOfferCountDown() {
    intervalNumber = setInterval(function () {
      if (sec !== -1) {
        $(".timer").html(`${hrs}hr ${min}min ${sec}sec`);
        sec--;
      } else {
        calcTime(offerTime - 1);
      }
      let date = new Date();
      console.log(date.toLocaleTimeString());
    }, 1000); // 1000ms === 1s
  }

  setTimeout(function () {
    calcTime(170);
    startOfferCountDown();
  }, 2000); // only once

  $(".help-desk-form > p").on("click", function () {
    $("#user-help-desk-form").toggleClass("d-none");
    $(".help-desk-form > p > i").toggleClass("help-desk-rotate-icon");
  });
});
