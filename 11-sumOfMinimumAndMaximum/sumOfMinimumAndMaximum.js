function sumOfMinimumAndMaximum(nums) {
  // Insert code here;

let min = Math.min(...nums);
let max = Math.max(...nums);
return min + max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;