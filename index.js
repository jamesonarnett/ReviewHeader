$(document).ready(function () {
  $("#btn1").click(function () {
    $("#form1").toggle();
  });
  $("#btn2").click(function () {
    $("#form2").toggle();
  });
  $(".container-graph")
    .mouseover(function () {
      $(".anchor").stop().fadeTo("fast", 0.6);
    })
    .mouseout(function () {
      $(".anchor").stop().fadeTo("fast", 1);
    });

  $(".anchor").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#myDiv").offset().top,
      },
      500
    );
  });
});
