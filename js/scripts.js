var pigLatin = function(string) {
  var word_array = wordSeparator(string);
  var returned_string = "";
  word_array.forEach(function(word) {
    returned_string += pigLatinWord(yChecker(word));
  });
  return returned_string.trim();
};

var pigLatinWord = function(word) {
  for(var i=0; i<word.length; i++) {
    var currentLetter = word.charAt(0);
    if (vowelCheck(currentLetter)) {
      break;
    } else if (currentLetter.toLowerCase() === "q" && word.charAt(1).toLowerCase() === "u") {
      word = word.slice(2, word.length);
      word += "qu";
    } else {
      word = word.slice(1, word.length);
      word += currentLetter;
    }
  }
  return word += "ay ";
}

var wordSeparator = function(string) {
  return string.split(" ");
}


var yChecker = function(string) {
  if(string.charAt(0).toLowerCase() === "y") {
    string = string.slice(1, string.length) + "y";
  }
  return string;
}

var vowelCheck = function(letter) {
  return ["a", "e", "i", "o", "u", "y"].indexOf(letter.toLowerCase()) !== -1;
};
