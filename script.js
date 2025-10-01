// Animation lors du scroll
const sections = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
});

// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
