const buttonLogin = document.getElementById('submit-login');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const checkAgreement = document.getElementById('agreement');
const buttonEnviar = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

// Requisito 3
function logUserIn() {
  const email = inputEmail.value;
  const password = inputPassword.value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', logUserIn);

// Requisito 18
function agreement() {
  if (checkAgreement.checked === true) {
    buttonEnviar.removeAttribute('disabled');
  } else {
    buttonEnviar.setAttribute('disabled', 'disabled');
  }
}

checkAgreement.addEventListener('click', agreement);

// Requisito 20
function countLength(event) {
  const textLength = 500 - event.target.textLength;
  counter.innerText = textLength;
}

textarea.addEventListener('keyup', countLength);
textarea.addEventListener('keydown', countLength);
