function reverseString(str) {

  var string = str;
  var arr = str.split('');
  str = arr.reverse().join('');
  return str;
}
