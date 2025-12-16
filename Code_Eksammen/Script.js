const menuOverlay = document.getElementById('menuOverlay');
const burger = document.querySelector('.burger-icon');
const closeMenu = document.getElementById('closeMenu');
const submenuToggle = document.querySelector('.submenu-toggle');
const submenu = document.querySelector('.submenu');

//--Her hentes de HTML-elementer, som JavaScript skal styre: menuOverlay er selve menu-overlayet, burger er burger-ikonet,--//
//--closeMenu er luk-knappen i menuen og submenuToggle er knappen, der åbner undermenuen.--//

// Åbn menu
burger.addEventListener('click', () => {
    menuOverlay.style.display = "block";
});
//--Når brugeren klikker på burger-ikonet, ændres menuens display til "block". Det betyder, at menu-overlayet bliver synligt på skærmen.--//


// Luk menu
closeMenu.addEventListener('click', () => {
    menuOverlay.style.display = "none";
});
//--Når brugeren klikker på luk-knappen, ændres display til "none". Menuen skjules dermed igen.--//


// Toggle undermenu
submenuToggle.addEventListener('click', () => {
    submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
});
//--Denne del fungerer som en toggle-funktion: Hvis undermenuen allerede er åben ("block"), lukkes den. Hvis den er lukket ("none"), åbnes den--/
//--Det gør det muligt at åbne og lukke undermenuen ved gentagne klik, uden at brugeren forlader menuen.--/



//-----Haller og Faciliteter----//
const slider = document.querySelector(".toggle-slider");
const btnHal = document.getElementById("btnHal");
const btnFac = document.getElementById("btnFac");
const facilityBox = document.querySelector(".facility-box");
const errorSection = document.querySelector(".error-section2");
//--Her hentes de elementer, som JavaScript skal styre: slider er den visuelle indikator,
// der bevæger sig mellem knapperne, btnHal er knappen for Haller, btnFac er knappen for Faciliteter,
// facilityBox indeholder indhold om faciliteter, errorSection indeholder baggrundsfoto til haller.--//

// HAL OVERSIGT
btnHal.addEventListener("click", () => {
    slider.style.transform = "translateX(0)";
//Slideren flyttes tilbage til venstre, så det visuelt fremgår, at Haller er valgt.

    btnHal.classList.add("active");
    btnFac.classList.remove("active");
//Aktive knap får en CSS-klasse, som tydeliggør valget visuelt.


    // VIS hal-siden
    errorSection.style.display = "block";

    // SKJUL facilitet-boksen
    facilityBox.style.display = "none";
//Indholdet om haller vises, mens facilitet-indholdet skjules.

});

// FACILITETER
btnFac.addEventListener("click", () => {
//Når brugeren klikker på Faciliteter-knappen, sker det modsatte: 

    slider.style.transform = "translateX(100%)";
//Slideren flyttes til højre og markerer visuelt det nye valg.

    btnFac.classList.add("active");
    btnHal.classList.remove("active");
//Den aktive tilstand flyttes til Faciliteter-knappen.


    // SKJUL hal-siden
    errorSection.style.display = "none";

    // VIS facilitet-boksen
    facilityBox.style.display = "block";
//Indholdet om faciliteter vises, mens hal-indholdet skjules.

});