const buttonLogin = document.getElementById('submit-login');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const checkAgreement = document.getElementById('agreement');
const buttonEnviar = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputFormEmail = document.getElementById('input-email');
const house = document.getElementById('house');
const family = document.getElementsByName('family');
const main = document.getElementById('main');
const checkBoxSkills = document.getElementsByClassName('subject');
const checkBoxRate = document.getElementsByName('rate');
const evaluationForm = document.getElementById('evaluation-form');

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
    buttonEnviar.classList.toggle('btn-disable');
  } else {
    buttonEnviar.setAttribute('disabled', 'disabled');
    buttonEnviar.classList.toggle('btn-disable');
  }
}

checkAgreement.addEventListener('click', agreement);

// Requisito 20
function countLength(event) {
  const textLength = 500 - event.target.textLength;
  counter.innerText = textLength;
}

textarea.addEventListener('keyup', countLength);

// Requisito 21
function selectedFamily() {
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked === true) {
      return family[index].value;
    }
  }
}

function checkedSkills() {
  let skills = '';
  for (let index = 0; index < checkBoxSkills.length; index += 1) {
    if (checkBoxSkills[index].checked === true) {
      if (skills != '') {
        skills = `${skills}, ${checkBoxSkills[index].value}`;
      } else {
        skills = `${checkBoxSkills[index].value}`;
      }
    }
  }
  return skills;
}

function selectedRate() {
  for (let index = 0; index < checkBoxRate.length; index += 1) {
    if (checkBoxRate[index].checked === true) {
      return checkBoxRate[index].value;
    }
  }
}

function sendForm() {
  const name = inputName.value;
  const lastName = inputLastName.value;
  const email = inputFormEmail.value;
  const selectFamily = selectedFamily();
  const selectSkills = checkedSkills();
  const selectRate = selectedRate();
  evaluationForm.style.display = 'none';
  const newForm = document.createElement('form');
  newForm.setAttribute('id', 'form-data');
  main.appendChild(newForm);
  newForm.innerText = `Nome: ${name} ${lastName} Email: ${email} Casa: ${house.value} Família: ${selectFamily} Matérias: ${selectSkills} Avaliação: ${selectRate} Observações: ${textarea.value}`;
}

buttonEnviar.addEventListener('click', sendForm);
