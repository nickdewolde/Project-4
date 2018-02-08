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

function Red() {
  document.getElementById("header").style.borderBottom = "2px solid #ff4444";
  document.getElementById("Pakket1").style.border = "5px solid #ff4444";
  document.getElementById("Pakket2").style.border = "5px solid #ff4444";
  document.getElementById("Pakket3").style.border = "5px solid #ff4444";
  document.getElementById("Bestellen1").style.background = "#ff4444";
  document.getElementById("Bestellen2").style.background = "#ff4444";
  document.getElementById("Bestellen3").style.background = "#ff4444";
  document.getElementById("Navigatie").className = "navigatie_blue";
  document.getElementById("mobile_nav").className = "nav_menu_blue";
}

function Normaal() {
  document.getElementById("header").style.borderBottom = "";
  document.getElementById("Pakket1").style.border = "";
  document.getElementById("Pakket2").style.border = "";
  document.getElementById("Pakket3").style.border = "";
  document.getElementById("Bestellen1").style.background = "";
  document.getElementById("Bestellen2").style.background = "";
  document.getElementById("Bestellen3").style.background = "";
  document.getElementById("Navigatie").className = "navigatie";
  document.getElementById("mobile_nav").className = "nav_menu";
}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
}

function rekenTool(bedrag){
  alert(
    "Per maand: €"+bedrag+"\n"+
    "Per jaar: €"+bedrag*12+"\n"+
    "Per 5 jaar: €"+bedrag*60
  );
}
