import Casilla from "./Casilla.js";
import Jugador from "./Jugador.js";

export default class Constructora {
  static construirCasillas() {
    return construirObjetosCasillas(extraerCasillas());

    function extraerCasillas() {
      var corners = document.getElementsByClassName("corner");
      var hBottomRow = invertirNodeList(
        document
          .getElementsByClassName("bottom-row")[0]
          .getElementsByClassName("space")
      );
      var vLeftRow = invertirNodeList(
        document
          .getElementsByClassName("left-row")[0]
          .getElementsByClassName("space")
      );
      var hTopRow = document
        .getElementsByClassName("top-row")[0]
        .getElementsByClassName("space");
      var vRightRow = document
        .getElementsByClassName("right-row")[0]
        .getElementsByClassName("space");

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
      let objetos = [];
      arr.forEach((e) => objetos.push(new Casilla(e)));
      return objetos;
    }
  }

  static construirJugadores() {
    let tarjetas = document.getElementsByClassName("tarjeta");
    let localPlayers = JSON.parse(localStorage.getItem("phpoly_players"));
    let jugadores = [];

    for (let i = 0; i < tarjetas.length; i++) {
      if (localPlayers && localPlayers[i]) {
        let pData = localPlayers[i];
        let tarjeta = tarjetas[i];

        let nombreDiv = tarjeta.querySelector(".nombre");
        if (nombreDiv && pData.name) nombreDiv.textContent = pData.name;

        let img = tarjeta.querySelector(".foto img");
        if (img && pData.icon) img.src = `./static/iconos/${pData.icon}.png`;

        let dineroDiv = tarjeta.querySelector(".dinero");
        if (dineroDiv && pData.money) dineroDiv.textContent = `${pData.money} ₱`;

        let posicionDiv = tarjeta.querySelector(".posicion");
        if (posicionDiv) posicionDiv.textContent = "0";

        let vivoDiv = tarjeta.querySelector(".vivo");
        if (vivoDiv) vivoDiv.textContent = "1";
      }

      let jugador = new Jugador(tarjetas[i]);
      jugadores.push(jugador);
    }

    return jugadores;
  }
}