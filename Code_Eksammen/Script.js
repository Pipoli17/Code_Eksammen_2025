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


//-----Haller og Faciliteter----//
const slider = document.querySelector(".toggle-slider");
const btnHal = document.getElementById("btnHal");
const btnFac = document.getElementById("btnFac");
const facilityBox = document.querySelector(".facility-box");
const errorSection = document.querySelector(".error-section2");

// HAL OVERSIGT
btnHal.addEventListener("click", () => {
    slider.style.transform = "translateX(0)";
    btnHal.classList.add("active");
    btnFac.classList.remove("active");

    // VIS hal-siden
    errorSection.style.display = "block";

    // SKJUL facilitet-boksen
    facilityBox.style.display = "none";
});

// FACILITETER
btnFac.addEventListener("click", () => {
    slider.style.transform = "translateX(100%)";
    btnFac.classList.add("active");
    btnHal.classList.remove("active");

    // SKJUL hal-siden
    errorSection.style.display = "none";

    // VIS facilitet-boksen
    facilityBox.style.display = "block";
});