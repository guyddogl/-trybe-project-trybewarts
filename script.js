const buttonLogin = document.getElementById('submit-login');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const checkAgreement = document.getElementById('agreement');
const buttonEnviar = document.getElementById('submit-btn');

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
