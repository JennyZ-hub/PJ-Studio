'use strict';

const navUpcomingEvent = document.querySelector('.nav--upcoming-events');
const navTestimonials = document.querySelector('.nav--testimonials');
const navPricing = document.querySelector('.nav--pricing');
const navBook = document.querySelector('.nav--book');
const sectionEvents = document.querySelector('.section-events');
const sectionTestimonials = document.querySelector('.section-testimonials');
const sectionPrice = document.querySelector('.section-price');
const sectionBooking = document.querySelector('.section-form');
navUpcomingEvent.addEventListener('click', function (e) {
  sectionEvents.scrollIntoView({ behavior: 'smooth' });
});
navTestimonials.addEventListener('click', function (e) {
  console.log(sectionTestimonials);
  sectionTestimonials.scrollIntoView({ behavior: 'smooth' });
});
navPricing.addEventListener('click', function (e) {
  sectionPrice.scrollIntoView({ behavior: 'smooth' });
});
navBook.addEventListener('click', function (e) {
  sectionBooking.scrollIntoView({ behavior: 'smooth' });
});
