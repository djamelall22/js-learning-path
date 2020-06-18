const throttle = (func, delay) => {
  let last = 0;

  return (...args) => {
    const now = new Date().getTime();
    if (now - last < delay) {
      return;
    }
    last = now;
    return func(...args);
  };
};

document.querySelector('#my-id').addEventListener(
  'click',
  throttle((e) => {
    console.log('you clicked me');
  }, 5000)
);
