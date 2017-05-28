// returns the sum of the two numbers in an array, and every number in between

function sumAll(arr) {
  
  var holdNum = [];

  for (i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); i++) {    
    
    holdNum.push(i);

  }

  return holdNum.reduce(function(a, b) {
    return a + b;
  });
  
}
