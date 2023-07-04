function hasTargetSum(array, target) {
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
*/
// index.js

function hasTargetSum(arr, target) {
  const numSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (numSet.has(complement)) {
      return true;
    }
    numSet.add(arr[i]);
  }

  return false;
}

// Test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // true
console.log(hasTargetSum([1, 2, 5], 4)); // false
console.log(hasTargetSum([-7, 10, 4, 8], 3)); // true
console.log(hasTargetSum([1, 2, 3, 4], 5)); // true
console.log(hasTargetSum([2, 2, 3, 3], 4)); // true
console.log(hasTargetSum([4], 4)); // false

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
