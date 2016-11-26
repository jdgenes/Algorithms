function titleCase(str) {
  var wordArr = str.toLowerCase().split(' ');
  var sentenceArr = [];
  
  //Capitalization for RegEx matches in block below
  function capitalize(match) {
      return match.toUpperCase();
    }
  
  for (var x = 0; x < wordArr.length; x++) {
    var word = wordArr[x];
    
    wordArr[x] = word.replace(/\w/i, capitalize);
  }
  
  return wordArr.join(' ');
} 
