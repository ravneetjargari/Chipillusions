document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('navLinks');
  
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
  document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});

});
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});