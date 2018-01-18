function Bestellen() {
  var Antwoord = prompt("Weet je zeker dat je dit pakket wil bestellen?");
  if (Antwoord === "ja") {
    alert("Gefeliciteerd, je bent nu eigenaar van het pakket.");
  }
  else if (Antwoord === "nee") {
    alert("Geeft niks, kijk rustig verder.");
  }
  else {
    alert("A.u.b. beantwoord de vraag met ja of nee.");
  }
}

function Bedankt() {
  alert("Bedankt voor het invullen van het contact formulier, wij zullen hier zo spoedig mogelijk op antwoorden.")
}

function Verticaal() {
  document.getElementById("pakket").style.width = "";
}

function Horizontaal() {
  document.getElementById("pakket").style.width = "100px";
}
