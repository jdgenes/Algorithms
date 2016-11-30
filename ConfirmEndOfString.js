function confirmEnding(str, target) {

  var endOfString = str.substring((str.length - target.length), (str.length));
  
  if (endOfString === target) {
    return true;
  }
  return false;
}
