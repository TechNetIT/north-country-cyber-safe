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
// CHEAT SHEET DOWNLOAD
// This is now a direct download link in the HTML (no JS needed).
// If you switch back to email-gated signup later, this is where that code would go again.
// ============================

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
