// script.js

// Smooth scrolling effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('nav.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-dark');
    } else {
        navbar.classList.remove('bg-dark');
    }
});

// Scroll reveal animation
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    reset: true
});

sr.reveal('.section-title, .section-description', {
    interval: 200
});

sr.reveal('.product', {
    interval: 300
});
