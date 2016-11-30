// TheTruncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with an elipsis (...) ending.
// Note that inserting the three dots to the end will add to the string length.
// However, if the given maximum string length num is less than or equal to 3
// then the addition of the three dots does not add to the string length in determining the truncated string.

function truncateString(str, num) {
  var string = str.slice(0, (num - 3)).concat("...");

  if (num <= 3) {
    string = str.slice(0, num).concat("...");
    return string;
  }
  
  if (num >= str.length) {
    return str;
  }
  
  return string;
}
