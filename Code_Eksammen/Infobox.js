//------------------Indhold til infobox------------------------//

const facts = {
  "Styrketræning": {
    img: "img/træning.png",
    text: `Udover klatring tilbyder Boulders også styrketræningsfaciliteter, der kan bruges som supplement til din træning. <br><br>
    Her kan du arbejde målrettet med styrke, stabilitet og kontrol, så du understøtter din udvikling på væggen. <br><br>
    Et oplagt sted at optimere din træning og skabe balance mellem klatring og styrke. I dit eget tempo.`
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

//--Her oprettes et JavaScript-objekt, som fungerer som en mini-database. Hver facilitet (fx "Moon Board") har: et billede (img), en tekst (text)--//



const infoButtons = document.querySelectorAll(".info-icon");
//--querySelectorAll vælger alle elementer på html-siden, der har klassen .info-icon. Som gør at info-knapper bliver fundet automatisk.-//

infoButtons.forEach(btn => {
  btn.addEventListener("click", () => {
//--forEach løber igennem alle ikonerne. addEventListener("click") gør, at der sker noget, når brugeren klikker.--//

    const name = btn.dataset.name;
    const fact = facts[name];
//--Hvert ikon har et data-attribut i HTML (fx data-name="Moon Board"). JavaScript bruger denne værdi til at slå op i facts-objektet. På den måde vises det rigtige billede og tekst til den facilitet, brugeren klikkede på.--//


    factTitle.textContent = name;
    factImage.src = fact.img;
    factText.innerHTML = fact.text;
//--Infoboksen får nu: Overskrift, Billede og beskrivelse--/

    factBox.classList.remove("hidden");
//--nfoboksen er skjult som udgangspunkt (CSS-klassen “hidden”).Når klassen fjernes, bliver boksen synlig som overlay.--//
  });
});

factClose.addEventListener("click", () => {
  factBox.classList.add("hidden");
});

//--Når brugeren klikker på luk-knappen, bliver klassen “hidden” tilføjet igen. Infoboksen forsvinder dermed fra skærmen.--//