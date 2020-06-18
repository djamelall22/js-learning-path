// const debounce = (func, delay = 2000) => {
//   let timeoutId;
//   return function (...args) {
//     if (timeoutId) {
//       clearTimeout(timeoutId);
//     }
//     timeoutId = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// };

// document.querySelector('#my-id').addEventListener(
//   'click',
//   debounce((e) => {
//     console.log('clicked');
//   })
// );
