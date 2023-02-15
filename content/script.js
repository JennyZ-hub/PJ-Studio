'use strict';

const navUpcomingEvent = document.querySelector('.nav--upcoming-events');
const sectionEvents = document.querySelector('.section-events');
navUpcomingEvent.addEventListener('click', function (e) {
  sectionEvents.scrollIntoView({ behavior: 'smooth' });
});
