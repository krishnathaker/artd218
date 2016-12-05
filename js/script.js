// Closes the sidebar menu
$(document).ready(function(){

  $("#menu-close").click(function(e) {
    e.preventDefault();
      $("#menu-close").hide();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Opens the sidebar menu
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#menu-close").show();
    $("#sidebar-wrapper").toggleClass("active");
  });
});
