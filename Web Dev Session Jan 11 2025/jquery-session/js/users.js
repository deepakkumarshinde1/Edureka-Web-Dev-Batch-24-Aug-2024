$(function () {
  $.ajax({
    url: "http://localhost:3004/users",
    method: "GET",
  })
    .done((result) => {
      if (result.length !== 0) {
        // print this to a table
        let rows = result.map(function (user, index) {
          return `<tr>
                        <td>${index + 1} </td>
                        <td>${user.fullName}</td>
                        <td>${user.userEmail}</td>
                        <td>${user.gender}</td>
                        <td>${user.dob}</td>
                        <td>
                            <button data-id="${
                              user.id
                            }" class="btn btn-danger btn-sm remove-record">
                                <i class="fa fa-trash"></i>
                            </button>
                        </td>
                    </tr>`;
        });

        $("#userList").html(rows);
      }
    })
    .fail((error) => {
      alert("Some thing went wrong, check console");
    });

  // $(".remove-record").on("click", function () {
  //   alert("delete is clicked");
  // });

  $(document).on("click", ".remove-record", function () {
    let _id = $(this).data("id");

    let isDelete = confirm("Are you sure to remove this record ?");
    if (isDelete === true) {
      $.ajax({
        url: `http://localhost:3004/users?id=${_id}`,
        method: "delete",
      })
        .done(() => {
          alert("Record Removed Successfully");
          // refresh this page
          window.location.reload();
        })
        .fail((error) => {
          alert(
            `Fail to remove record, try again. Error: ${error.status} ${error.statusText}`
          );
        });
    }
  });
});
