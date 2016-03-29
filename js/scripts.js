$(function() {

  $("form").submit(function(event) {
    event.preventDefault();

    var countTo =parseInt($("#countTo").val());
    var countBy =parseInt($("#countBy").val());

    // if (countTo >= 0)  {

      for (var index = countBy; index <= countTo; index += countBy) {
        $("#result").append("<li>"+index+"</li> ");
        console.log('made it');
      }
    // }
    // else if (countBy >= 0 ) {
    //
    //   for (var index = countBy; index <= countTo; index += countBy) {
    //     $("#result").append("<li>"+index+"</li> ");
    //     console.log('made it');
    //   }
    // }
    //
    // else{
    //   console.log("darn");
    //   alert("ERR0R");
    // }

  });



});
