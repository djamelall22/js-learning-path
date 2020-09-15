// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((acc, char) => char + acc, '');
}
module.exports = reverse;

// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------

// function reverse(str) {
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('');
// }

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// function reverse(str) {
//     let reverse = '';
//     for (let c of str) {
//       reverse = c + reverse;
//     }
//     return reverse;
//   }
