import Juego from "./modelos/Juego.js";

$(document).ready(function () {
  if (!localStorage.getItem("phpoly_players")) {
    window.location.href = "reinicio.html";
    return;
  }

  // Audio setup
  const bgMusic = new Audio("./static/music.mp3");
  bgMusic.loop = true;
  bgMusic.volume = 0.4;

  const startAudio = () => {
    bgMusic.play().catch((err) => console.log("Audio deferred:", err));
    document.removeEventListener("click", startAudio);
  };
  document.addEventListener("click", startAudio);

  let juego = new Juego();

  // Overwrite property names dynamically in board order (0 - 39)
  const realNames = [
    "GO", "Mediterranean Ave", "Community Chest", "Baltic Ave", "Income Tax",
    "Reading Railroad", "Oriental Ave", "Chance", "Vermont Ave", "Connecticut Ave",
    "Jail", "St. Charles Place", "Electric Company", "States Ave", "Virginia Ave",
    "Pennsylvania Railroad", "St. James Place", "Community Chest", "Tennessee Ave", "New York Ave",
    "Free Parking", "Kentucky Ave", "Chance", "Indiana Ave", "Illinois Ave",
    "B. & O. Railroad", "Atlantic Ave", "Ventnor Ave", "Water Works", "Marvin Gardens",
    "Go To Jail", "Pacific Ave", "North Carolina Ave", "Community Chest", "Pennsylvania Ave",
    "Short Line Railroad", "Chance", "Park Place", "Luxury Tax", "Boardwalk"
  ];

  juego.casillas.forEach((casilla, index) => {
    if (realNames[index]) {
      casilla.nombre = realNames[index];
      let nameDiv = casilla.div.querySelector(".name");
      if (nameDiv) nameDiv.textContent = realNames[index];
    }
  });

  let border = "0em 0em 0em 0.5em #ffffff95";
  document.getElementsByClassName("tarjeta")[0].style.boxShadow = border;

  document.addEventListener("diceRolled", function (e) {
    let rollValue = e.detail;
    if (!isNaN(rollValue)) {
      Juego.SiguienteTurno(juego, rollValue);
    }
  });

  $("#comprar").click(function () {
    Juego.comprar(juego);
  });
  
  $("#pasar").click(function () {
    Juego.pasar(juego);
  });
});