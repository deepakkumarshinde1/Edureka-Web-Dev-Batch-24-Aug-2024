$(function () {
  var myGuides = $.guides({
    guides: [
      {
        element: $(".enquiry"),
        html: "Here is contact details",
        color: "#fff", // text/arrow color
      },
      {
        element: $(".search-place"),
        html: "Get All A courses",
      },
    ],
    end: function () {
      localStorage.setItem("tour-status", 1);
    },
  });
  // start the tour
  let tourStatus = localStorage.getItem("tour-status");
  if (tourStatus === null) {
    myGuides.start();
  }
});
