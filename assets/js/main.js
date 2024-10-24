
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.go-to');

// Smooth scroll on anchor links
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth', 
      block: 'start' 
    });
  });
});

// ------------------------------------------------

// add active class to navigation links on scroll
window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= (sectionTop - 100) && scrollPosition < sectionTop + sectionHeight) {
      const currentId = section.getAttribute('id');
      navLinks.forEach((link) => {
        link.closest('LI').classList.remove('active');
      });
      document.querySelector(`.header__nav ul li a[href="#${currentId}"]`).closest('LI').classList.add('active');
    }
  });
});

// ------------------------------------------------

// Add class sticky to header on scroll
const headerInner = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 50) {
    headerInner.classList.add('sticky');
  } 
  if(window.scrollY === 0) {
    headerInner.classList.remove('sticky');
  }
  if(window.scrollY < 750) {
    navLinks.forEach((link) => {
      link.closest('LI').classList.remove('active');
    });
  }
});

// ------------------------------------------------

// Language switcher
document.addEventListener('DOMContentLoaded', function() {
  const languageToggle = document.querySelector('.languages__current');
  const currentURL = window.location.pathname;

  function setLanguage(lang) {
    languageToggle.textContent = lang;
  }

  if (currentURL.includes('/ru')) {
    setLanguage('RU');
  } else {
    setLanguage('EN');
  }

  const languageLinks = document.querySelectorAll('.languages a');
  languageLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      const targetLang = event.target.textContent.trim();
      setLanguage(targetLang === 'Russian' ? 'RU' : 'EN');
    });
  });
});

// ------------------------------------------------