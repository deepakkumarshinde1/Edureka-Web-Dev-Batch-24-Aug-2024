let isTourDone = localStorage.getItem("isTourDone");

if (isTourDone === null) {
  let myGuides = $.guides({
    guides: [
      {
        element: $("#title"),
        html: "Welcome to edureka",
        color: "#fff", // text/arrow color
      },
      {
        element: $("#cta"),
        html: "Create a new Account",
      },
      {
        element: $("#action"),
        html: "Our Courses",
      },
      {
        element: $("#youtube"),
        html: "Get free videos on youtube",
      },
      {
        element: $("#footer"),
        html: "Get more details gere",
        render: function () {
          localStorage.setItem("isTourDone", "1");
        },
      },
    ],
  });
  // start the tour
  myGuides.start();
}

// setTimeout(function () {
//   myGuides.end();
// }, 5000);
