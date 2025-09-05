// Toggle menu and navbar on menu icon click
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Remove active menu/navbar on window scroll
window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Toggle show/hide details on all elements with class 'view-details-btn'
document.querySelectorAll('.view-details-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const details = btn.previousElementSibling;
    if (details.style.display === 'none' || details.style.display === '') {
      details.style.display = 'block';
      btn.textContent = 'Hide Details';
    } else {
      details.style.display = 'none';
      btn.textContent = 'View Details';
    }
  });
});

// Typed.js initialization for typing effect
const typed = new Typed('.multiple-text', {
  strings: ['DevOps Engineer', 'Frontend Developer', 'Backend Developer'],
  typeSpeed: 60,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});

// Toggle 'About' card display on clicking readMoreBtn
const readMoreBtn = document.getElementById('readMoreBtn');
const aboutCard = document.getElementById('aboutCard');

if (readMoreBtn && aboutCard) {
  readMoreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    aboutCard.style.display = aboutCard.style.display === 'none' ? 'block' : 'none';
  });
}

// Redirect from www subdomain to non-www domain (only runs on page load)
if (window.location.hostname.startsWith('www.')) {
  const newHost = window.location.hostname.slice(4); // Remove 'www.'
  const newUrl = window.location.protocol + '//' + newHost + window.location.pathname + window.location.search;
  window.location.replace(newUrl);
}
// Note: Ensure Typed.js library is included in your HTML for the typing effect to work.
// Example: <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
// Also, ensure that the HTML structure matches the selectors used in this script.