const showInputError = (formEl, inputEl, errorMsg) => {
  const errorMsgId = formEl.querySelector(`#${inputEl.id}-error`);
  errorMsgId.textContent = errorMsg;
  inputEl.classList.add(".modal__input_type_error");
};

const hideInputError = (formEl, inputEl) => {
  const errorMsgId = formEl.querySelector(`#${inputEl.id}-error`);
  errorMsgId.textContent = "";
  inputEl.classList.remove("modal__input_type_error");
};

const checkInputValidity = (formEl, inputEl) => {
  if (!inputEl.validity.valid) {
    console.log(inputEl.validationMessage);
    showInputError(formEl, inputEl, inputEl.validationMessage);
  } else {
    hideInputError(formEl, inputEl);
  }
};

const setEventListeners = (formEl) => {
  const inputList = Array.from(formEl.querySelectorAll(".modal__input"));
  const buttonElement = formEl.querySelector(".modal__submit-buttom");

  //toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formEl, inputElement);
      // toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = document.querySelectorAll(".modal__form");
  formList.forEach((formEl) => {
    setEventListeners(formEl);
  });
};

enableValidation();
