// script.js
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

// Toggle menu open/close
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navMenu.classList.toggle('active');
});