// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
  // IntersectionObserver pour les fade-in (meilleure performance que scroll)
  const sections = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && sections.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.15 });
    sections.forEach(s => obs.observe(s));
  } else {
    // Fallback simple : rendre visibles
    sections.forEach(s => s.classList.add('visible'));
  }

  // Menu mobile : vérifier l'existence des éléments avant d'ajouter l'écouteur
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});
