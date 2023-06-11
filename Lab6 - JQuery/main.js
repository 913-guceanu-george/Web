$(document).ready(function () {
  var desktopWidth = $(".desktop").width();
  var numDesktops = 4;
  var currentDesktop = 0;

  // Set initial state
  $(".desktop").css("left", -desktopWidth + "px");
  $(".desktop.active").css("left", "0");

  $(".desktop").click(function () {
    var nextDesktop = (currentDesktop + 1) % numDesktops;
    currentDesktop++;

    // Make the current desktop inactive and the next one active
    $(".desktop").eq(currentDesktop).removeClass("active").addClass("inactive");
    $(".desktop").eq(nextDesktop).removeClass("inactive").addClass("active");

    // Slide current desktop out
    $(".desktop")
      .eq(currentDesktop)
      .animate({ left: desktopWidth + "px" }, 500);

    // Slide next desktop in
    $(".desktop")
      .eq(nextDesktop)
      .css("left", -desktopWidth + "px")
      .animate({ left: "0" }, 500);

    currentDesktop = nextDesktop;
  });
});
