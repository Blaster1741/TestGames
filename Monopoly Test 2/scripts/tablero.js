import Juego from "./modelos/Juego.js";
import BotEngine from "./bot.js";

$(document).ready(function () {
  if (!localStorage.getItem("phpoly_players")) {
    window.location.href = "reinicio.html";
    return;
  }

  const bgMusic = new Audio("./static/music.mp3");
  bgMusic.loop = true;
  bgMusic.volume = 0.4;

  const startAudio = () => {
    bgMusic.play().catch((err) => console.log("Audio deferred:", err));
    document.removeEventListener("click", startAudio);
  };
  document.addEventListener("click", startAudio);

  let juego = new Juego();

  document.addEventListener("diceRolled", function (e) {
    let rollValue = e.detail;
    if (!isNaN(rollValue)) {
      Juego.SiguienteTurno(juego, rollValue);
    }
  });

  $("#comprar").click(function () { Juego.comprar(juego); });
  $("#pasar").click(function () { Juego.pasar(juego); });

  $("#intercambiar").click(function () {
    let totalPlayers = juego.jugadores.length;
    let currentPlayer = juego.jugadores[juego.ronda % totalPlayers];

    if (!currentPlayer.vivo) return;

    $("#trade-offerer-name").text(`${currentPlayer.nombre}'s Offer`);
    populateChecklist("#trade-offer-props", currentPlayer.propiedades);

    let targetSelect = $("#trade-target-player");
    targetSelect.empty();
    juego.jugadores.forEach((p, idx) => {
      if (p !== currentPlayer && p.vivo) {
        targetSelect.append(new Option(`${p.nombre} ${p.isBot ? "(BOT)" : ""}`, idx));
      }
    });

    updateTargetProperties();
    $("#trade-modal").removeClass("hidden");
  });

  $("#trade-target-player").change(updateTargetProperties);

  function updateTargetProperties() {
    let targetIdx = $("#trade-target-player").val();
    if (targetIdx !== null) {
      let targetPlayer = juego.jugadores[targetIdx];
      $("#trade-target-name").text(`${targetPlayer.nombre}'s Offer`);
      populateChecklist("#trade-request-props", targetPlayer.propiedades);
    }
  }

  function populateChecklist(containerId, properties) {
    let container = $(containerId);
    container.empty();
    if (properties.length === 0) {
      container.append("<em>No properties owned</em>");
      return;
    }
    properties.forEach((prop, idx) => {
      container.append(`
        <label>
          <input type="checkbox" value="${idx}"> ${prop.nombre} ($${prop.coste})
        </label>
      `);
    });
  }

  $("#btn-cancel-trade").click(() => { $("#trade-modal").addClass("hidden"); });

  $("#btn-propose-trade").click(() => {
    let totalPlayers = juego.jugadores.length;
    let offerer = juego.jugadores[juego.ronda % totalPlayers];
    let targetIdx = $("#trade-target-player").val();
    let target = juego.jugadores[targetIdx];

    let offerCash = parseInt($("#trade-offer-cash").val()) || 0;
    let requestCash = parseInt($("#trade-request-cash").val()) || 0;

    if (offerCash > offerer.dinero || requestCash > target.dinero) {
      alert("Invalid cash offer: Exceeds player funds!");
      return;
    }

    let offeredProps = [];
    $("#trade-offer-props input:checked").each(function () {
      offeredProps.push(offerer.propiedades[$(this).val()]);
    });

    let requestedProps = [];
    $("#trade-request-props input:checked").each(function () {
      requestedProps.push(target.propiedades[$(this).val()]);
    });

    let accepted = false;
    if (target.isBot) {
      accepted = BotEngine.evaluateTradeOffer(target, offerCash, offeredProps, requestCash, requestedProps);
    } else {
      accepted = confirm(`${target.nombre}, do you accept this trade offer from ${offerer.nombre}?`);
    }

    if (accepted) {
      Juego.ejecutarTrade(offerer, target, offerCash, offeredProps, requestCash, requestedProps);
      juego.cambiarMensaje(`Trade completed between ${offerer.nombre} & ${target.nombre}!`);
      $("#trade-modal").addClass("hidden");
    } else {
      juego.cambiarMensaje(`${target.nombre} rejected the trade offer.`);
      $("#trade-modal").addClass("hidden");
    }
  });
});