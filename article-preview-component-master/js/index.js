const shareIcon = document.querySelector('#share');
const socialContainer = document.querySelector('#social');

shareIcon.addEventListener('click', () => {
  socialContainer.classList.toggle('show');
});
