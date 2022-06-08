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
const checkBoxSkills = document.getElementsByClassName('subject');
const checkBoxRate = document.getElementsByName('rate');
const evaluationForm = document.getElementById('evaluation-form');
const formData = document.getElementById('form-data');

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
  const skills = [];
  for (let index = 0; index < checkBoxSkills.length; index += 1) {
    if (checkBoxSkills[index].checked === true) {
      skills.push(checkBoxSkills[index].value);
    }
  }
  return skills.join(', ');
}

function selectedRate() {
  for (let index = 0; index < checkBoxRate.length; index += 1) {
    if (checkBoxRate[index].checked === true) {
      return checkBoxRate[index].value;
    }
  }
}

function sendForm(event) {
  event.preventDefault();
  const formObject = {
    Nome: `${inputName.value} ${inputLastName.value}`,
    Email: inputFormEmail.value,
    Casa: house.value,
    Família: selectedFamily(),
    Matérias: checkedSkills(),
    Avaliação: selectedRate(),
    Observações: textarea.value,
  };
  evaluationForm.style.display = 'none';
  const arrayForm = [];
  for (let index = 0; index < Object.keys(formObject).length; index += 1) {
    arrayForm.push(`${Object.keys(formObject)[index]}: ${Object.values(formObject)[index]}`);
  }
  formData.innerText = arrayForm.join(' ');
}

buttonEnviar.addEventListener('click', sendForm);
