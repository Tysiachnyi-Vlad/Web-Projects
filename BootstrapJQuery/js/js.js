$(document).ready(function(){
  $(".contacts").hide();
  ///////////////////////////////////////////
  $(".inf1").on("click", function(){
    alert("My first project");
  });//end inf3
  $(".inf2").click(function(){
    alert("I hope you will enjoy my site!");
  });//end inf3
  $(".inf3").click(function(){
    alert("Thank's for your attention!");
  });//end inf3

  $("#contact").click(function(){
    $(".contacts").show();

  });//end click contact
  $("#button").click(function(){
    $(".contacts").hide();
  });

});
