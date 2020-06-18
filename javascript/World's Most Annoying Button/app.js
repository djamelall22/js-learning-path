const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', () => {
  console.log('MOUSED OVER ME!!');
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerwidth);
  btn.style.top = `${height}px`;
  btn.style.left = `${width}px`;
});

btn.addEventListener('click', () => {
  btn.innerText = 'YOU GOT ME!';
  document.body.style.backgroundColor = 'green';
});
