$(function() {

  $("form").submit(function(event) {
    event.preventDefault();

    var countTo =parseInt($("#countTo").val());
    var countBy =parseInt($("#countBy").val());

    for (var index = countBy; index <= countTo; index += countBy) {
      $("#result").append("<li>"+index+"</li> ");
    }

  });

});
