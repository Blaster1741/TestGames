import Juego from "./modelos/Juego.js";

$(document).ready(function () {
  if (!localStorage.getItem("phpoly_players")) {
    window.location.href = "reinicio.html";
    return;
  }

  // Background music
  const bgMusic = new Audio("./static/music.mp3");
  bgMusic.loop = true;
  bgMusic.volume = 0.4;

  const startAudio = () => {
    bgMusic.play().catch((err) => console.log("Audio deferred:", err));
    document.removeEventListener("click", startAudio);
  };
  document.addEventListener("click", startAudio);

  let juego = new Juego();

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