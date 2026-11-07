import Casilla from "./Casilla.js";
import Jugador from "./Jugador.js";

export default class Constructora {
  static construirCasillas() {
    let casillas = construirObjetosCasillas(extraerCasillas());

    casillas.forEach((casilla) => {
      let container = casilla.div.querySelector(".fichas-container");
      if (!container) {
        container = document.createElement("div");
        container.className = "fichas-container";
        casilla.div.appendChild(container);
      }
    });

    return casillas;

    function extraerCasillas() {
      var corners = document.getElementsByClassName("corner");
      var hBottomRow = invertirNodeList(
        document.getElementsByClassName("bottom-row")[0].getElementsByClassName("space")
      );
      var vLeftRow = invertirNodeList(
        document.getElementsByClassName("left-row")[0].getElementsByClassName("space")
      );
      var hTopRow = document.getElementsByClassName("top-row")[0].getElementsByClassName("space");
      var vRightRow = document.getElementsByClassName("right-row")[0].getElementsByClassName("space");

      var casillasOrdenadas = [];
      casillasOrdenadas.push(corners[0]);
      hBottomRow.forEach((e) => casillasOrdenadas.push(e));
      casillasOrdenadas.push(corners[1]);
      vLeftRow.forEach((e) => casillasOrdenadas.push(e));
      casillasOrdenadas.push(corners[2]);
      [...hTopRow].forEach((e) => casillasOrdenadas.push(e));
      casillasOrdenadas.push(corners[3]);
      [...vRightRow].forEach((e) => casillasOrdenadas.push(e));

      return casillasOrdenadas;
    }

    function invertirNodeList(nodeList) {
      return [...nodeList].reverse();
    }

    function construirObjetosCasillas(arr) {
      return arr.map((e) => new Casilla(e));
    }
  }

  static construirJugadores() {
    let localPlayers = JSON.parse(localStorage.getItem("phpoly_players")) || [];
    let colors = ["morado", "rosa", "amarillo", "verde", "azul", "rojo", "naranja", "cian"];
    let tarjetasContainer = document.querySelector(".tarjetas");
    tarjetasContainer.innerHTML = "";

    let jugadores = [];

    localPlayers.forEach((pData, index) => {
      let colorClass = colors[index % colors.length];

      let tarjetaDiv = document.createElement("div");
      tarjetaDiv.className = `tarjeta ${colorClass}`;
      tarjetaDiv.innerHTML = `
        <div class="foto"><img src="./static/iconos/${pData.icon}.png" alt="${pData.icon}"></div>
        <div class="datos-jugador">
          <div class="nombre">${pData.name} ${pData.isBot ? "🤖" : ""}</div>
          <div class="dinero">${pData.money} ₱</div>
          <div class="propiedades">Properties:</div>
          <div class="propiedades-cantidad">0</div>
          <div class="posicion" hidden>0</div>
          <div class="vivo" hidden>1</div>
        </div>
      `;
      tarjetasContainer.appendChild(tarjetaDiv);

      let jugador = new Jugador(tarjetaDiv, pData);
      jugadores.push(jugador);
    });

    return jugadores;
  }
}