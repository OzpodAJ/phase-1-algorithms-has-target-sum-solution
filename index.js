function hasTargetSum(array, target) {
  const seenNumbers = {}
  for (let i = 0; i < array.length; i++){
    const complement = target - array[i];
    if (seenNumbers[complement]) return true; 
    seenNumbers[array[i]] = true;
  }
  return false
}
// for (let i = 0; i < array.length; i++){
//   const complement = target - array[i];
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[j] === complement) return true;
//   }
// }
// return false
/* 
  Write the Big O time complexity of your function here
  runtime: 0(n^2)
  space: 0(n)
*/

/* 
  Add your pseudocode here
  iterate through array for initial number
  subtract initial number from target to get secondary number
  iterate through array again for secondary number
  if secondary number found, return true
  otherwise return false
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
