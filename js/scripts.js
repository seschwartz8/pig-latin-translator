function startsWithVowel(word){
  var vowels = ["a", "e", "i", "o", "u"];
  word = word.toLowerCase();
  var firstChar = word.charAt(0);
  return vowels.includes(firstChar) ? true : false;
}

function isConsonant(char){
  char = char.toLowerCase();
  if ((!startsWithVowel(char)) && ((char >= "a") && (char <= "z"))) {
    return true;
  }
  return false;
}

function toPigLatin(input){
  var result = input;
  var firstChar = input.charAt(0);

  if (startsWithVowel(input)){
    result += "way";
  } else if (isConsonant(firstChar)){
    var ending = "";
    for (var i = 0; i < input.length; i++){
      var currentChar = input.charAt(i);
      if (isConsonant(currentChar)){
        ending = ending.concat(currentChar);
      } else {
        result = result.slice(i);
        result = result.concat(ending);
        result = result.concat("ay");
        return result;
      }
    }
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