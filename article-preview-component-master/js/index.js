const shareIcon = document.querySelector('#share');
const socialContainer = document.querySelector('#social');

shareIcon.addEventListener('click', () => {
  if ((socialContainer.style.visibility = 'hidden')) {
    socialContainer.classList.toggle('show');
  } else {
  }
});
