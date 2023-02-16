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

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

btnLeft.addEventListener('click', function (e) {});
