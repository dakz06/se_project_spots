const setEventListeners = (formEl) => {
  const inputList = Array.from(formEl.querySelectorAll(".form__input"));
  const buttonElement = formEl.querySelector(".form__submit");

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputEl) => {
    inputEl.addEventListenter("input", function () {
      checkInputValidity(formEl, inputEl);
      toggleButtonState(inputList, buttonElement);
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
