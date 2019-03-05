$(document) .ready(function() {
  $("#bluh").on("click", function() {
    var bgc = $(this).css("backgroundColor");
    //console.log(bgc);

    if (bgc == "rgb(255, 0, 0)") changeColor("blue");
    else if (bgc == "rgb(0, 0, 255)") changeColor("red");
  })
  function changeColor(x) {
    $("#bluh").css("background", x);
  }  
})
