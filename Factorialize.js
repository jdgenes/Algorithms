function factorialize(num) {
  var y = 1;
  for (var x = 1; x <= num; x++) {
    y *= x;
  }
  return y;
}
