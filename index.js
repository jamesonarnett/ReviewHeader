$(".container-graph")
  .mouseover(function () {
    $(".anchor").stop().fadeTo("fast", 0.6);
  })
  .mouseout(function () {
    $(".anchor").stop().fadeTo("fast", 1);
  });
