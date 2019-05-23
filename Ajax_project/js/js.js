
$(".btn-pages").hide();
$("#previous").attr('disabled','disabled');

  $("#update").click(function(){
    $.ajax({
      url: 'http://content.guardianapis.com/search?api-key=test',
      type: 'GET',
      error: function() {
               alert("Sorry, we couldn't find news for you. Try later.");
           },
      success: function(data) {
        $("ul").empty();
      for (var i = 0; i < 10; i++) {
        $("ul").append(
                "<li class='row'>"
                   + data.response.results[i].webTitle +
                  "<button class='accordion'> Shortcut </button>"+
                    "<span id='txt'>"+ "Some small part of information :)<br>" +
                      "<a href='"+data.response.results[i].webUrl + "'>More here</a>"+
                    "</span>"+
                "</li>");
      }
      var acc = $(".accordion");
      for (var i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display == "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
            }

        }
      }//end of loop
      $(".btn-pages").show();
      $("#pages_quantity").append("of " + data.response.pages + " pages");
      console.log(data.response);
      $("#next").click(function(){
        var page = parseInt($("#pages").val());
        if(page >= data.response.pages-1){
          $("#next").attr('disabled','disabled');

        }
        page += 1;
        $("#pages").val(page);
        $("#previous").removeAttr('disabled');

      })//end #next click
      $("#previous").click(function(){
        var page = parseInt($("#pages").val());
        if(page <= 2){
          $("#previous").attr('disabled','disabled');
        }
        page -= 1;
        $("#pages").val(page);
        $("#next").removeAttr('disabled');
      })// end of #previous click
      $("#pages").change(function(){
        var page = parseInt($("#pages").val());
        if(page < 1 || page > data.response.pages){
          $("#pages").val(1);
          alert("This page doesn't exist");
        }
        if(page == 1){
          $("#previous").attr('disabled','disabled');
          $("#next").removeAttr('disabled');
        }
        if(page == data.response.pages){
          $("#next").attr('disabled','disabled');
          $("#previous").removeAttr('disabled');
        }
        changePage(page);

      })//end of change

      function changePage(page, data) {
        $("ul").load(page, function(){
          $("ul").empty();
          for (var i = 0; i < 10; i++){
            $("ul").append(

            );
          }//end of loop
        })//end load

      } //end function
    }//end of success
  }); //end of ajax
});//end of update click

/*
$("#next").click(function(){
  var page = parseInt($("#pages").val());
  if(page >= 12420){
    $("#next").attr('disabled','disabled');

  }
  page += 1;
  $("#pages").val(page);
  $("#previous").removeAttr('disabled');

})//end #next click
$("#previous").click(function(){
  var page = parseInt($("#pages").val());
  if(page <= 2){
    $("#previous").attr('disabled','disabled');
  }
  page -= 1;
  $("#pages").val(page);
  $("#next").removeAttr('disabled');
})// end of #previous click
$("#pages").change(function(){
  var page = parseInt($("#pages").val());
  if(page < 1 || page > 12421){
    $("#pages").val(1);
    alert("This page doesn't exist");
  }
  if(page == 1){
    $("#previous").attr('disabled','disabled');
  }
  if(page == 12421){
    $("#next").attr('disabled','disabled');
  }

})//end of change
*/
