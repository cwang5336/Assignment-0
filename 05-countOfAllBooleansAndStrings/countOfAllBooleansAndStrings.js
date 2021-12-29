function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  var c = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === true || arr[i] === false || typeof arr[i] === "string") {
      c++;
    }
  }

  return c;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;