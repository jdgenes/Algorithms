// First draft of this algorithm. There is
// at least one unnecessary step in which it
// has empty arrays it has to iterate through
// before not adding them. Refactoring required to
// remove this step.


function chunkArrayInGroups(arr, size) {
  var sortedArray = [];
  var index = 0;
  
  for (var x = 0; x < arr.length; x++) {
    
      var a = arr.slice(index, (index + size));
      index += size;
      
      // here is the hackish block to fix the empty array problem
      if (a.length > 0) {
        sortedArray.push(a);
      }
    
  }
  
  return sortedArray;
}
