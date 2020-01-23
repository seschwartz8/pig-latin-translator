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

function wordToPigLatin(input){
  var result = input;
  var firstChar = input.charAt(0);

  if (startsWithVowel(input)){
    result += "way";
  } else if (isConsonant(firstChar)){
    var ending = "";
    for (var i = 0; i < input.length; i++){
      var currentChar = input.charAt(i);
      var prevChar = input.charAt(i-1);
      if (isConsonant(currentChar) || ((currentChar === "u") && (prevChar === "q"))){
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

function sentenceToPigLatin(sentence){
  var wordsArray = sentence.split(" ");
  var pigWordsArray = wordsArray.map(wordToPigLatin);
  return pigWordsArray.join(" ");
}

$(document).ready(function(){

  $("form").submit(function(event){
    event.preventDefault();

    var userInput = $("#user-input").val();
    $("#result").text(sentenceToPigLatin(userInput));
  })
})