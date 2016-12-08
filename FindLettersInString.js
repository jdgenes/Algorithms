// searches arr[0] for letters in string from arr[1]
// ex: mutation(['help', 'lep']); should return true

function mutation(arr) {
  var toSearch = arr[0].toLowerCase();
  var searchTerm = arr[1].toLowerCase().split('');
  var matchCount = 0;
  
  for (var x = 0; x < searchTerm.length; x++) {
    var match = toSearch.indexOf(searchTerm[x], 0);
    if (match >= 0) {
      matchCount++;
    }
  }

  if (matchCount == searchTerm.length) {
    return true;
  }
  
  return false;
}
