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

$(function () {
  $("#dob").datepicker({
    beforeShow: function () {
      setTimeout(function () {
        $(".ui-datepicker").css("z-index", 10);
      }, 0);
    },
    // maxDate: new Date(2024, 9, 24),
    // minDate: "-1m",
    changeYear: true,
    changeMonth: true,
    dateFormat: "dd/mm/yy",
  });

  $("#user-tab").tabs();

  function getData() {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "get",
    })
      .done(function (data) {
        let lists = data
          .map(function (user) {
            return `<section
              class="course-list-item position-relative border border-1 border-secondary-subtle shadow-sm"
            >
              <section
                class="d-flex align-items-center course-list-item-1 p-3 justify-content-center"
              >
                <i class="fa fa-cubes circle fa-2x text-primary"></i>
                <p class="mb-0 mx-2 text-white text-uppercase fw-bold text-center">
                  ${user.name}
                </p>
              </section>
              <section class="bg-white p-3">
                <p class="mb-0 fs-4 fw-bold text-uppercase">
                  ${user.email}
                </p>
                <p class="mt-2">
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star-half-empty text-warning"></i>

                  <span class="ms-3">4.5 (675678)</span>
                </p>
              </section>

              <section
                class="pop-up-content text-white d-flex flex-column justify-content-center align-items-center"
              >
                <section>
                  <span class="fst-italic small">next batch</span>
                  <p class="mt-2">In 0 days to 21st September</p>
                  <i class="small">what will i learn?</i>

                  <ul class="ps-3 small">
                    <li>Introduction to AWS</li>
                    <li>Amazon EC2</li>
                    <li>Amazon S3 Bucket</li>
                  </ul>
                  <button
                    class="btn text-white border border-1 border-white rounded-0 px-5"
                  >
                    View Details
                  </button>
                </section>
              </section>
            </section>`;
          })
          .join("");

        $("#list").html(lists);
      })
      .fail(function (error) {
        console.error(error.statusText);
      });
  }

  async function getDataWithFetch() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "get",
      });
      let data = await response.json();

      let lists = data
        .map(function (user) {
          return `<section
              class="course-list-item position-relative border border-1 border-secondary-subtle shadow-sm"
            >
              <section
                class="d-flex align-items-center course-list-item-1 p-3 justify-content-center"
              >
                <i class="fa fa-cubes circle fa-2x text-primary"></i>
                <p class="mb-0 mx-2 text-white text-uppercase fw-bold text-center">
                  ${user.name}
                </p>
              </section>
              <section class="bg-white p-3">
                <p class="mb-0 fs-4 fw-bold text-uppercase">
                  ${user.email}
                </p>
                <p class="mt-2">
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star-half-empty text-warning"></i>

                  <span class="ms-3">4.5 (675678)</span>
                </p>
              </section>

              <section
                class="pop-up-content text-white d-flex flex-column justify-content-center align-items-center"
              >
                <section>
                  <span class="fst-italic small">next batch</span>
                  <p class="mt-2">In 0 days to 21st September</p>
                  <i class="small">what will i learn?</i>

                  <ul class="ps-3 small">
                    <li>Introduction to AWS</li>
                    <li>Amazon EC2</li>
                    <li>Amazon S3 Bucket</li>
                  </ul>
                  <button
                    class="btn text-white border border-1 border-white rounded-0 px-5"
                  >
                    View Details
                  </button>
                </section>
              </section>
            </section>`;
        })
        .join("");

      $("#list").html(lists);
    } catch (error) {
      console.error(error.statusText);
    }
  }

  getDataWithFetch();
});
