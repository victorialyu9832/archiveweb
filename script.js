// Smooth Scroll on Navigation Click
document.querySelectorAll('.scroll-to').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll Animation Trigger
const fadeInElements = document.querySelectorAll('.fade-in-scroll');

function revealOnScroll() {
    fadeInElements.forEach(element => {
        const elementPos = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPos < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});
