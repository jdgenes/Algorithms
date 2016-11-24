//returns true if palindrome's parameter is a palindrome

function palindrome(str) {
  var isPalindrome = false;
  var stringIn = str.replace(/[\W+_+]/gi, '');
  var arr = stringIn.toLowerCase().split(/\s*/);
  var string1 = arr.join('');
  var string2 = arr.reverse().join('');
  if (string1 == string2) {
    isPalindrome = true;
  }
  
  return isPalindrome;
}
