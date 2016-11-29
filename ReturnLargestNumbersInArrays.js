function largestOfFour(arr) {

  var sortedArray = [];
  
  for (var i = 0; i < arr.length; i++) {    
    
    var sortedElement = 0;
    
    for (var j = 0; j < arr[i].length; j++) {

      if (arr[i][j] >= sortedElement) {
        sortedElement = arr[i][j];
        sortedArray[i] = sortedElement;
      }
      
      
      
    }
  }
  
  return sortedArray;
}
