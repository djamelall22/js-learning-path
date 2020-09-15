// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const rev = str.split('').reverse().join('');
  return rev === str ? true : false;
}
palindrome('abba');

function palindrome(str) {
  const rev = str.split('').reduce((acc, char) => char + acc, '');
  return rev === str ? true : false;
}
palindrome('abba');

function palindrome(str) {
  const rev = str.split('').reduce((acc, char) => char + acc, '');
  return rev === str;
}
palindrome('abba');

function palindrome(str) {
  let reverse = '';
  for (let char of str) {
    reverse = char + reverse;
  }
  return reverse === str ? true : false;
}
palindrome('abba');

module.exports = palindrome;
