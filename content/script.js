'use strict';

const navUpcomingEvent = document.querySelector('.nav--upcoming-events');
const navTestimonials = document.querySelector('.nav--testimonials');
const navPricing = document.querySelector('.nav--pricing');
const navBook = document.querySelector('.nav--book');
const sectionEvents = document.querySelector('.section-events');
const sectionTestimonials = document.querySelector('.section-testimonials');
const sectionPrice = document.querySelector('.section-price');
const sectionBooking = document.querySelector('.section-form');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.btn--left');
const btnRight = document.querySelector('.btn--right');

document.querySelector('.nav-list').addEventListener('click', function (e) {
  if (e.target.classList.contains('nav-link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

let curSlide = 0;

const goToslide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

goToslide(0);

const nextSlide = function () {
  if (curSlide === 2) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToslide(curSlide);
};
btnRight.addEventListener('click', nextSlide);

const previousSlide = function () {
  if (curSlide === 0) {
    curSlide = 2;
  } else {
    curSlide--;
  }
  goToslide(curSlide);
};

btnLeft.addEventListener('click', previousSlide);
