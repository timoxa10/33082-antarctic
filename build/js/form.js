'use strict';

var form = document.querySelector('.form__content');
var formTitle = document.querySelector('.form__title');
var formTitleSuccess = document.querySelector('.form__title--success');
var formTitleError = document.querySelector('.form__title--error');
var checkboxField = form.querySelector('.form__checkbox-input:checked');
var submitField = form.querySelector('.form__button');
var phoneField = form.querySelector('.form__input-phone');
var successHandler = window.backend.send;

var isFieldChecked = function () {
  if (checkboxField.checked === true) {
    submitField.disabled = false;
    submitField.style.opacity = 1;
  } else {
    submitField.disabled = true;
    submitField.style.opacity = 0.3;
  }
};

var formChangeHandler = function () {
  isFieldChecked();
};

var buyFormSubmitHandler = function (evt) {
  sendFormData(evt);
};

var sendFormData = function (evt) {
  successHandler(new FormData(form), function () {
    formTitle.style.visibility = 'hidden';
    form.style.visibility = 'hidden';
    form.reset();
    formTitleSuccess.classList.remove('hidden');
  }, errorHandler);
  evt.preventDefault();
};

var errorHandler = function () {
  formTitle.style.visibility = 'hidden';
  form.style.visibility = 'hidden';
  formTitleError.classList.remove('hidden');
};

var phoneMask = IMask(
    phoneField, {
      mask: '+{7}(000)000-00-00'
    });

form.addEventListener('change', formChangeHandler);
form.addEventListener('submit', buyFormSubmitHandler);
