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


//------------------Indhold til infobox------------------------//
// Fakta data (titler, billeder og tekst)
const factData = {
  "Styrketræning": {
    img: "ikon/styrketræning.jpg", // Udskift med korrekt billedsti
    text: `Hos Boulders handler gode vibes om at skabe et sted, hvor du føler dig velkommen fra første sekund – uanset niveau. 
    Folk hjælper hinanden, deler små tips og hepper, når man prøver noget nyt.  Vi lægger vægt på hjælpsomhed, tryghed og plads til alle højder.
    Gode vibes er følelsen af, at du hører til – lige præcis som du er.`
  },
  "Moon Board": {
    img: "ikon/moonboard.jpg",
    text: `MoonBoarden er en stejl træningsvæg, hvor grebene lyser op via en app, så du kan følge ruter fra hele verden. 
Den er fysisk udfordrende, men du tager det i dit eget tempo. 
Et godt sted at mærke styrke, rytme og fællesskab.`
  },
  "Kilter Board": {
    img: "ikon/kilterboard.jpg",
    text: `Kilter Boarden giver dig friheden til selv at justere hældningen, så væggen passer til dit niveau. 
Grebene lyser op i appen, og du kan vælge mellem masser af ruter, der både hjælper dig ind i sporten og giver dig plads til at udvikle dig.`
  },
  "CampusBoard": {
    img: "ikon/campusboard.jpg",
    text: `Campus Boarden er et simpelt, effektivt træningsværktøj, hvor du arbejder primært med hænderne på vandrette lister.
Det er en intens måde at bygge styrke på, og du vælger selv, hvordan du vil gribe det an.`
  },
  "Spray": {
    img: "ikon/spray.jpg",
    text: `Spray Wallen er fyldt med greb, så du kan skabe dine problemer eller udforske dem, andre har lavet. 
Den inviterer til legende bevægelse og giver plads til både teknik, kreativitet og fælles klatreoplevelser.`
  },
  "Gode vibes": {
    img: "ikon/godevibes.jpg",
    text: `Hos Boulders handler gode vibes om at skabe et sted, hvor du føler dig velkommen fra første sekund – uanset niveau.
Folk hjælper hinanden, deler små tips og hepper, når man prøver noget nyt.  Vi lægger vægt på hjælpsomhed, tryghed og plads til alle højder.
 Gode vibes er følelsen af, at du hører til – lige præcis som du er.`
  }
};

const factBox = document.getElementById("factBox");
const factTitle = document.getElementById("factTitle");
const factText = document.getElementById("factText");
const factImage = document.getElementById("factImage");
const factClose = document.getElementById("factClose");

// Åbn fakta boksen når man klikker på info-ikonet
document.querySelectorAll(".info-icon").forEach(icon => {
  icon.addEventListener("click", (e) => {
    // Hent facilitet navn fra col-left teksten (uden info-ikonet)
    const facilitet = e.target.closest(".col-left").childNodes[0].textContent.trim();

    if(factData[facilitet]){
      factTitle.textContent = facilitet;
      factText.textContent = factData[facilitet].text;
      factImage.src = factData[facilitet].img;
      factImage.alt = facilitet;
      factBox.classList.remove("hidden");
    }
  });
});

// Luk fakta boksen når man klikker på krydset
factClose.addEventListener("click", () => {
  factBox.classList.add("hidden");
});

