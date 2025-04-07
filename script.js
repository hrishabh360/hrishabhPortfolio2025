// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Example: Reveal sections on scroll
    const sections = document.querySelectorAll('.section');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
  
    sections.forEach(section => {
      section.classList.add('hidden');
      observer.observe(section);
    });
  
    // Optional: Responsive navbar toggle (for future hamburger menu)
    // const menuToggle = document.querySelector('.menu-toggle');
    // const navLinks = document.querySelector('.nav-links');
    // menuToggle.addEventListener('click', () => {
    //   navLinks.classList.toggle('active');
    // });
  });
  