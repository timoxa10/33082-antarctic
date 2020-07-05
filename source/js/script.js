'use strict';

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var navLogo = document.querySelector('.logo__image');
navMain.classList.remove('main-nav--nojs');

// navLogo.setAttribute('src', 'img/M-logo.svg');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navLogo.setAttribute('src', 'img/M-logo-black.svg');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navLogo.setAttribute('src', 'img/M-logo.svg');
  }
});
