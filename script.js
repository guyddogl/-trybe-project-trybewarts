const buttonLogin = document.getElementById('submit-btn');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');

function logUserIn(event) {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', logUserIn);