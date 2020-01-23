

$(document).ready(function(){


  $("form").submit(function(event){
    event.preventDefault();

    var userInput = $("#user-input").val();
    $("#result").text(userInput);


  })
})