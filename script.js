// script.js

// Smooth scroll to sections
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Back to top button
const topBtn = document.createElement('button');
topBtn.textContent = '↑';
topBtn.style.position = 'fixed';
topBtn.style.bottom = '30px';
topBtn.style.right = '30px';
topBtn.style.padding = '10px 15px';
topBtn.style.border = 'none';
topBtn.style.backgroundColor = '#00adb5';
topBtn.style.color = '#fff';
topBtn.style.borderRadius = '50%';
topBtn.style.cursor = 'pointer';
topBtn.style.fontSize = '20px';
topBtn.style.zIndex = '999';
topBtn.style.display = 'none';
document.body.appendChild(topBtn);

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
});