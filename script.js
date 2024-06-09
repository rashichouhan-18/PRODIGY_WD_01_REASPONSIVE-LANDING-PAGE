window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('mouseover', event => {
        event.target.style.color = 'black';
    });
    item.addEventListener('mouseout', event => {
        event.target.style.color = 'white';
    });
});

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});