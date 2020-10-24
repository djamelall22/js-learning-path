const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordTwo = document.getElementById('password2');

const checkInputs = () => {
  // get the values from the inputs
  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordTwoValue = passwordTwo.value.trim();

  /////////////////////////////// username////////////////////////////////
  if (userNameValue === '') {
    //   show error and add error class
    setErrorFor(username, 'Username can not be blank');
  } else {
    //   add success class
    setSuccessFor(username);
  }

  ////////////////////////////email/////////////////////////////////
  if (emailValue === '') {
    setErrorFor(email, 'Email can not be blank');
  } else {
    //  add success class
    setSuccessFor(email);
  }

  ////////////////////////// password/////////////////////////////////
  if (passwordValue === '') {
    //   show error and add error class
    setErrorFor(password, 'Password can not be blank');
  } else {
    //   add success class
    setSuccessFor(password);
  }

  /////////////////// passwordTwo//////////////////////////
  if (passwordTwoValue === '') {
    //   show error and add error class
    setErrorFor(passwordTwo, 'Password can not be blank');
  } else if (passwordTwoValue !== passwordValue) {
    setErrorFor(passwordTwo, 'Passwords does not match');
  } else {
    //   add success class
    setSuccessFor(passwordTwo);
  }
};

// error
const setErrorFor = (input, message) => {
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector('small');
  //   add error message inside the small tag
  small.innerText = message;
  // add error class
  formControl.className = 'form-control error';
};

// success
const setSuccessFor = (input) => {
  const formControl = input.parentElement; //.form-control
  formControl.className = 'form-control success';
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});
