var pigLatin = function(string) {
  var firstLetter = string.charAt(0);
  if(vowelCheck(firstLetter)) {
    return string + "ay";
  } else {
    var return_string = string.slice(1, string.length);
    return return_string += (firstLetter + "ay");
  }
};

var vowelCheck = function(letter) {
  return ["a", "e", "i", "o", "u"].indexOf(letter.toLowerCase()) !== -1;
};
