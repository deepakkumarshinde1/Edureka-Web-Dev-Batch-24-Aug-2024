$(function () {
  $("#dob").datepicker({
    dateFormat: "dd/mm/yy",
    minDate: "-1m",
    maxDate: "0d",
  });
  $("#save-data").on("click", function (event) {
    event.preventDefault();
    console.log("Button was clicked");
    let formData = $("#userRegistrationForm").serializeArray(); // [{name:"", value:""},{name:"", value:""}]

    let sendData = {};
    // { inputName:value  }
    formData.forEach(function (elObject) {
      sendData[elObject.name] = elObject.value;
    });

    // send a data to sever
    $.ajax({
      url: "http://localhost:3004/users",
      method: "POST",
      data: JSON.stringify(sendData),
      contentType: "application/json",
      dataType: "json",
    })
      .done((result) => {
        console.log(result);
      })
      .fail((error) => {
        console.log(error);
      });
  });
});

// let n1 = Number($('#fNumber).val())
// let n2 = Number($('#fNumber).val())
// let result = n1 + n2;

// Y-M-D => yyyy-mm-dd

// get => read
// post => add data
// put => update
// delete => delete
