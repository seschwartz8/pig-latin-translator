function toPigLatin(input){
  var vowels = ["a", "e", "i", "o", "u"];
  var result = input;
  var firstChar = input.charAt(0);
  //If first char is vowel add "way" at end of word
  if (vowels.includes(firstChar)){
    result += "way";
  }
  return result;
}

$(document).ready(function(){


  $("form").submit(function(event){
    event.preventDefault();

    var userInput = $("#user-input").val();
    $("#result").text(toPigLatin(userInput));


  })
})