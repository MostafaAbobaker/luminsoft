/*global $, document*/
$(document).ready(function () {
  // Icon Toggle Navbar
  $("#iconToggle").click(function () {
    $(this).toggleClass("active");
    $("#navToggle").slideToggle(500);
    $("#navbarSupportedContent").toggleClass("view-mobile ");
    $("#contentBody").toggleClass("overlay-show");
    $("body").toggleClass("overflow-hidden");
  });

  // Toggle Category List
  $(".category-list .item").click(function () {
    $(this)
      .toggleClass("active")
      .parent(".parent-col")
      .siblings()
      .find(".item")
      .removeClass("active");
  });
});
