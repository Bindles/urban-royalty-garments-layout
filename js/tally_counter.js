// TALLY / COUNTER IN JS SHOWN BELOW => SIMILAR TO RUBY PYTHON
function longestPalindrome(s) {
  let charCount = {};
  let result = 0;
  // Count the occurrences of each character
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Calculate the longest palindrome length
  for (let count of Object.values(charCount)) {
    result += Math.floor(count / 2) * 2;
    if (result % 2 === 0 && count % 2 === 1) {
      result += 1;
    }
  }
  return result;
}
// =>
let s = "abccccdd";
console.log(longestPalindrome(s));  // Output: 7
