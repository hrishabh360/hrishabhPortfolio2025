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
  

  function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('show');
  }
  });


   // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });