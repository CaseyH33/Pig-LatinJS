var pigLatin = function(string) {
  for(var i=0; i<string.length; i++) {
    var currentLetter = string.charAt(0);
    if (vowelCheck(currentLetter)) {
      break;
    } else if (currentLetter.toLowerCase() === "q" && string.charAt(1).toLowerCase() === "u") {
      string = string.slice(2, string.length);
      string += "qu";
    } else {
      string = string.slice(1, string.length);
      string += currentLetter;
    }
  }
  return string += "ay";
};

var vowelCheck = function(letter) {
  return ["a", "e", "i", "o", "u"].indexOf(letter.toLowerCase()) !== -1;
};
