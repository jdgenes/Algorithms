function findLongestWord(str) {
  var strLength = 0;
  var arr = str.split(' ');
  
  for (var x = 0; x < arr.length; x++) {
   
   var lengthLoop = arr[x];
   var y = lengthLoop.length;
       
    if (y > strLength) {
      strLength = y;
    }
  }
  
  return strLength;

}
