const nameInput = document.getElementById("name");
const nameError = document.getElementById("name-error");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const ageInput = document.getElementById("age");
const ageError = document.getElementById("age-error");
const radioButtons = document.getElementsByName("gender");
const radioError = document.getElementById("gender-error");
const selectInput = document.getElementById("profession");
const selectError = document.getElementById("profession-error");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const confirmPasswordInput = document.getElementById("confirm-password");
const confirmPasswordError = document.getElementById("confirm-password-error");
const checkboxElement = document.getElementById("consent");
const checkboxErrorElement = document.getElementById("consent-error");

function validateInput(inputElement, errorElement) {
  if (!inputElement.checkValidity()) {
    inputElement.classList.add("error");
    errorElement.textContent = inputElement.validationMessage;
  } else {
    inputElement.classList.remove("error");
    errorElement.textContent = "";
  }
}

function validateRadioBtn() {
  let checkedRadio = false;

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      checkedRadio = true;
      break;
    }
  }
  if (!checkedRadio) {
    radioError.textContent = "Вы должны выбрать пол";
  } else {
    radioError.textContent = "";
  }
}

function validatePassword() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.classList.add("error");
    confirmPasswordError.textContent = "Пароли не совпадают";
  } else {
    confirmPasswordInput.classList.remove("error");
    confirmPasswordError.textContent = "";
  }
}

function validateCheckbox(checkboxElement, checkboxErrorElement) {
  if (!checkboxElement.checked) {
    checkboxElement.classList.add("error");
    checkboxErrorElement.textContent = "Пожалуйста, выберите данный пункт.";
  }
}

function validateSelect(selectInput, selectError) {
  if (selectInput.value === "") {
    selectInput.classList.add("error");
    selectError.textContent = "Вы должны выбрать элемент из списка";
  }
}

function clearErrors() {
  const inputElements = document.querySelectorAll(
    "input:not([type='checkbox'])"
  );
  const errorElements = document.getElementsByClassName("error");

  Array.from(inputElements).forEach(function (inputElement) {
    inputElement.classList.remove("error");
  });

  selectInput.classList.remove("error");
  selectError.textContent = "";

  Array.from(errorElements).forEach(function (errorElement) {
    errorElement.textContent = "";
  });
  checkboxElement.classList.remove("error");
  checkboxErrorElement.textContent = "";
}

document.addEventListener("DOMContentLoaded", function () {
  document.forms.registration.addEventListener("submit", function (event) {
    event.preventDefault();

    clearErrors();

    validateInput(nameInput, nameError);
    validateInput(emailInput, emailError);
    validateInput(ageInput, ageError);
    validateRadioBtn();
    validateSelect(selectInput, selectError);
    validateInput(passwordInput, passwordError);
    validateInput(confirmPasswordInput, confirmPasswordError);
    validateCheckbox(checkboxElement, checkboxErrorElement);
    validatePassword();

    if (
      nameInput.checkValidity() &&
      emailInput.checkValidity() &&
      ageInput.checkValidity() &&
      document.querySelector('input[name="gender"]:checked') &&
      selectInput.checkValidity() &&
      passwordInput.checkValidity() &&
      confirmPasswordInput.checkValidity() &&
      checkboxElement.checked
    ) {
      console.log("Значение имени:", nameInput.value);
      console.log("Значение email:", emailInput.value);
      console.log("Значение возраста:", ageInput.value);
      console.log(
        "Значение выбранной радиокнопки:",
        document.querySelector('input[name="gender"]:checked').value
      );
      console.log("Значение выпадающего списка:", selectInput.value);
      console.log("Значение пароля:", passwordInput.value);
      console.log("Значение повторного пароля:", confirmPasswordInput.value);
      console.log("Значение чекбокса:", checkboxElement.value);

      registration.reset();
    } else {
      console.log("Не все поля проходят валидацию");
    }
  });
});
