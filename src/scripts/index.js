let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__button');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

let sliderElementsAdv = document.querySelectorAll('.slider__item');
let sliderElementsRev = document.querySelectorAll('.reviews__item');
let sliderToggleAdv = document.querySelectorAll('.slider__toggle');
let sliderToggleRev = document.querySelectorAll('.slider__toggle');
let sliderToggles = document.querySelector('.slider__toggles');
let revToggles = document.querySelector('.reviews__toggles');
let fastAdv = document.querySelector('.advantages__item--fast');
let coolAdv = document.querySelector('.advantages__item--cool');
let expensiveAdv = document.querySelector('.advantages__item--expensive');
let first = document.querySelector('.reviews__item--first');
let second = document.querySelector('.reviews__item--second');
let third = document.querySelector('.reviews__item--third');
let leftArrow = document.querySelector('.reviews__prev');
let rightArrow = document.querySelector('.reviews__next');

sliderToggles.addEventListener('click', function (e) {
  let isButton = e.target.nodeName === 'BUTTON';
  for (let n = 0; n < sliderElementsAdv.length - 3; n++) {
    sliderElementsAdv[n].classList.remove('slider__item--active');
    sliderToggleAdv[n].classList.remove('slider__toggle--active');
    if (isButton && e.target.className.includes('fast')) {
      fastAdv.classList.add('slider__item--active');
      e.target.classList.add('slider__toggle--active');
    } else if (isButton && e.target.className.includes('cool')) {
      coolAdv.classList.add('slider__item--active');
      e.target.classList.add('slider__toggle--active');
    } else if (isButton && e.target.className.includes('expensive')) {
      expensiveAdv.classList.add('slider__item--active');
      e.target.classList.add('slider__toggle--active');
    }
  }
});

revToggles.addEventListener('click', function (e) {
  let isButton = e.target.nodeName === 'BUTTON';
  for (let n = 3; n < sliderElementsAdv.length; n++) {
    sliderElementsAdv[n].classList.remove('slider__item--active');
    sliderToggleAdv[n].classList.remove('slider__toggle--active');
    if (isButton && e.target.className.includes('first')) {
      first.classList.add('slider__item--active');
      e.target.classList.add('slider__toggle--active');
    } else if (isButton && e.target.className.includes('second')) {
      second.classList.add('slider__item--active');
      e.target.classList.add('slider__toggle--active');
    } else if (isButton && e.target.className.includes('third')) {
      third.classList.add('slider__item--active');
      e.target.classList.add('slider__toggle--active');
    }
  }
});

rightArrow.addEventListener('click', function (e) {
  let isButton = e.target.nodeName === 'BUTTON';
  for (let n = 3; n <= sliderElementsAdv.length; n++) {
    console.log(n);
    if (isButton && sliderElementsAdv[n].className.includes('active')) {
      sliderElementsAdv[n].classList.remove('slider__item--active');
      sliderToggleAdv[n].classList.remove('slider__toggle--active');
      sliderElementsAdv[(n % 3) + 4].classList.add('slider__item--active');
      sliderToggleAdv[(n % 3) + 4].classList.add('slider__toggle--active');
      return;
    }
  }
});
leftArrow.addEventListener('click', function (e) {
  let isButton = e.target.nodeName === 'BUTTON';
  for (let n = 5; n >= 3; n--) {
    console.log(n);
    if (isButton && sliderElementsAdv[n].className.includes('active')) {
      sliderElementsAdv[n].classList.remove('slider__item--active');
      sliderToggleAdv[n].classList.remove('slider__toggle--active');
      sliderElementsAdv[n - 1].classList.add('slider__item--active');
      sliderToggleAdv[n - 1].classList.add('slider__toggle--active');
      return;
    }
  }
});
