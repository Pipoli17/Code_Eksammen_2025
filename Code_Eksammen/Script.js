const menuOverlay = document.getElementById('menuOverlay');
const burger = document.querySelector('.burger-icon');
const closeMenu = document.getElementById('closeMenu');
const submenuToggle = document.querySelector('.submenu-toggle');
const submenu = document.querySelector('.submenu');

// Åbn menu
burger.addEventListener('click', () => {
    menuOverlay.style.display = "block";
});

// Luk menu
closeMenu.addEventListener('click', () => {
    menuOverlay.style.display = "none";
});

// Toggle undermenu
submenuToggle.addEventListener('click', () => {
    submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
});
