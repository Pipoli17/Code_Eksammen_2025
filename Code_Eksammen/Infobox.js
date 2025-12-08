//------------------Indhold til infobox------------------------//

const facts = {
  "Styrketræning": {
    img: "img/træning.png",
    text: `Hos Boulders handler gode vibes om at skabe et sted, hvor du føler dig velkommen fra første sekund - uanset niveau. <br><br>
    Folk hjælper hinanden, deler små tips og hepper, når man prøver noget nyt. Vi lægger vægt på hjælpsomhed, tryghed og plads til alle højder. <br><br>
    Gode vibes er følelsen af, at du hører til - lige præcis som du er.`
  },
  "Moon Board": {
    img: "img/moonborad.png",
    text: `MoonBoarden er en stejl træningsvæg, hvor grebene lyser op via en app, så du kan følge ruter fra hele verden. <br><br>
    Den er fysisk udfordrende, men du tager det i dit eget tempo. <br><br>
    Et godt sted at mærke styrke, rytme og fællesskab.`
  },
  "Kilter Board": {
    img: "img/kilterborad.png",
    text: `Kilter Boarden giver dig friheden til selv at justere hældningen, så væggen passer til dit niveau. <br><br>
    Grebene lyser op i appen, og du kan vælge mellem masser af ruter, der både hjælper dig ind i sporten og giver dig plads til at udvikle dig.`
  },
  "CampusBoard": {
    img: "img/capusboard.png",
    text: `Campus Boarden er et simpelt, effektivt træningsværktøj, hvor du arbejder primært med hænderne på vandrette lister. <br><br>
    Det er en intens måde at bygge styrke på, og du vælger selv, hvordan du vil gribe det an.`
  },
  "Spray": {
    img: "img/spray.png",
    text: `Spray Wallen er fyldt med greb, så du kan skabe dine problemer eller udforske dem, andre har lavet. <br><br>
    Den inviterer til legende bevægelse og giver plads til både teknik, kreativitet og fælles klatreoplevelser.`
  },
  "Gode vibes": {
    img: "img/gode-vibs.png",
    text: `Hos Boulders handler gode vibes om at skabe et sted, hvor du føler dig velkommen fra første sekund - uanset niveau. <br><br>
    Folk hjælper hinanden, deler små tips og hepper, når man prøver noget nyt. <br><br>
    Vi lægger vægt på hjælpsomhed, tryghed og plads til alle højder. <br><br>
    Gode vibes er følelsen af, at du hører til - lige præcis som du er.`
  }
};


const infoButtons = document.querySelectorAll(".info-icon");
infoButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;
    const fact = facts[name];
    factTitle.textContent = name;
    factImage.src = fact.img;
    factText.innerHTML = fact.text;
    factBox.classList.remove("hidden");
  });
});

factClose.addEventListener("click", () => {
  factBox.classList.add("hidden");
});