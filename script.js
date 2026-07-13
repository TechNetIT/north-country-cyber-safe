// ============================
// MOBILE NAV TOGGLE
// ============================
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close the mobile menu after clicking a link
document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// ============================
// CHEAT SHEET SIGNUP FORM
// Currently just opens a pre-filled email.
// Swap this for Formspree (or similar) once you have a real domain.
// ============================
const cheatForm = document.getElementById('cheatForm');

cheatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  window.location.href = `mailto:TechNetIT@proton.me?subject=Send me the scam cheat sheet&body=Please send the cheat sheet to: ${email}`;
});

// ============================
// CONTACT FORM
// Currently just opens a pre-filled email.
// ============================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('contact-email').value;
  const message = document.getElementById('message').value;

  const subject = encodeURIComponent(`Website message from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);

  window.location.href = `mailto:TechNetIT@proton.me?subject=${subject}&body=${body}`;
});
