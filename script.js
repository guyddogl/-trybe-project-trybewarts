const buttonLogin = document.getElementById('submit-btn');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');

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
