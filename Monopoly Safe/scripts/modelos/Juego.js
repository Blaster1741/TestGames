import Constructora from "./Constructora.js";

export default class Juego {
  constructor() {
    this.casillas = Constructora.construirCasillas();
    this.jugadores = Constructora.construirJugadores();
    this.ronda = 0;
    this.botones = $(".botones");
    this.jugadoresMuertos = [];

    this.#initialize();

    console.log("Board spaces:", this.casillas);
    console.log("Players:", this.jugadores);
    console.log("🚀 Game ready to start 🚀");
  }

  /**
   * Places all players at their starting positions
   */
  #initialize() {
    let casillas = this.casillas;
    let jugadores = this.jugadores;
    var jugadorI;
    var casillaI;

    for (let i = 0; i < jugadores.length; i++) {
      jugadorI = jugadores[i];
      casillaI = casillas[jugadorI.posicion];
      casillaI.historial.push(jugadorI.color);
      casillas[jugadorI.posicion].div.style.backgroundColor = jugadorI.color;
    }

    casillas[jugadores[0].posicion].div.style.boxShadow =
      "inset 0em 0em 0em 0.4em #ffffff95";
    casillas[jugadores[0].posicion].div.style.backgroundColor =
      jugadores[0].color;
  }

  /** Runs after the dice is rolled
   * 
   * @param {Juego} juego Current match
   * @param {Number} n Dice roll value
   */
  static SiguienteTurno(juego, n) {
    console.log(`Dice: ${n}`);

    let _jugadores = juego.jugadores;
    var casilla;

    var jugadorActual = _jugadores[juego.ronda % 4];

    // Check if player is alive
    if (juego.jugadoresMuertos.length < 3) {
      if (jugadorActual.vivo) { // If alive, play turn
        jugadorVivo(Juego, mostrarBtns);
      } else { // If dead, check if logged in dead players array
        if(juego.jugadoresMuertos.indexOf(jugadorActual) == -1) {
          juego.jugadoresMuertos.push(jugadorActual);
        }
        Juego.pasar(juego);
        Juego.SiguienteTurno(juego, n);
      }
    } else { // If 3 players are dead, end the game
      acabarJuego(_jugadores);
    }

    /**
     * Show buy/pass buttons and hide dice
     */
    function mostrarBtns() {
      var dice = $(".title");

      juego.mostrar(juego.botones);
      juego.ocultar(dice);
    }

    /**
     * If player is alive, check space landed on
     */
    function jugadorVivo(Juego, mostrarBtns) {
      casilla = Juego.moverFicha(juego, jugadorActual, n);

      switch (casilla.tipo) {
        case "property": // Standard property
          if (casilla.propietario == null) {
            if(jugadorActual.dinero > casilla.coste) {  // If player has enough money to buy
              mostrarBtns();
             } else {
              juego.cambiarMensaje(`${jugadorActual.nombre} does not have enough money to buy ${casilla.nombre}`);
              Juego.pasar(juego);
             }
          } else { // Property is owned
            if(casilla.propietario != jugadorActual) { // Owner is another player
              jugadorActual.pagarAlquiler(casilla);
              juego.cambiarMensaje(
                `${jugadorActual.nombre} paid rent to ${casilla.propietario.nombre}`
              );
            } else {
              Juego.pasar(juego);
            }
          }
          break;

        // Taxes
        case "fee luxury-tax":
        case "fee income-tax":
          jugadorActual.pagarImpuesto(casilla);
          juego.cambiarMensaje(
            `${jugadorActual.nombre} paid taxes`
          );
          Juego.pasar(juego);
          break;

        default:
          Juego.pasar(juego);
          break;
      }
    }

    /** Only one player remains active
     * Hide dice and buttons, show winner banner
     * 
     * @param {Jugador[]} jugadores
     */
    function acabarJuego(jugadores) {
      let mensajeDiv = $("#mensaje");

      let jugadorVivo = jugadores.filter(e => e.vivo)[0];

      juego.ocultar($(".title")); // hide dice

      mensajeDiv.css("grid-row", "4"); // center on board
      mensajeDiv.html(`🎉 ${jugadorVivo.nombre} has won the game! 🎉`);
      mensajeDiv.css("visibility", "visible");
      mensajeDiv.css("opacity", "1");
    }
  }

  /**
   * 
   * @param {Juego} juego Current match
   * @param {Jugador} jugadorActual Active turn player
   * @param {Number} n Dice roll value
   * @returns {Casilla} Destination space
   */
  static moverFicha(juego, jugadorActual, n) {
    let casillaAnterior = juego.casillas[jugadorActual.posicion];
    let historial = casillaAnterior.historial;
    let casillaObjetivo;
    var posicionAnterior;

    // Remove token trace from previous position
    historial.splice(historial.indexOf(jugadorActual.color), 1);
    if (historial.length == 0) {
      casillaAnterior.div.style.backgroundColor = "#f0f0f0";
    } else {
      casillaAnterior.div.style.backgroundColor =
        historial[historial.length - 1];
    }

    if (casillaAnterior.propietario == null) {
      casillaAnterior.div.style.boxShadow = "none";
    } else {
      casillaAnterior.div.style.boxShadow =
        "inset 0em 0em 0em 0.4em " + casillaAnterior.propietario.color;
    }

    // Move player token
    posicionAnterior = jugadorActual.posicion;
    jugadorActual.posicion = (posicionAnterior + n) % 40;
    casillaObjetivo = juego.casillas[jugadorActual.posicion];
    console.log("Player position:", jugadorActual.posicion);

    // Update target space styling
    casillaObjetivo.div.style.backgroundColor = jugadorActual.color;
    casillaObjetivo.div.style.boxShadow = "inset 0em 0em 0em 0.4em #ffffff95";
    casillaObjetivo.historial.push(jugadorActual.color);

    // Check if player completed a circuit (GO space)
    if (posicionAnterior > jugadorActual.posicion) {
      jugadorActual.vuelta();
    }

    return casillaObjetivo;
  }

  /** Player purchases a property
   * 
   * @param {Juego} juego Current match
   */
  static comprar(juego) {
    let jugadorComprador = juego.jugadores[juego.ronda % 4];
    let casillaComprada = juego.casillas[jugadorComprador.posicion];

    jugadorComprador.comprar(casillaComprada);

    juego.cambiarMensaje(
      `${jugadorComprador.nombre} bought ${casillaComprada.nombre}`
    );
    Juego.pasar(juego);
  }

  static pasar(juego) {
    let jugadorActual = juego.jugadores[juego.ronda % 4];
    let jugadorSiguiente = juego.jugadores[(juego.ronda + 1) % 4];

    Juego.pasarAlSiguiente(juego, jugadorActual, jugadorSiguiente);
  }

  /** Advance to next player turn and clear current token highlight
   * 
   * @param {Juego} juego Current match
   * @param {Jugador} jugadorActual Current player
   * @param {Jugador} jugadorSiguiente Next player
   */
  static pasarAlSiguiente(juego, jugadorActual, jugadorSiguiente) {
    var borde = "inset 0em 0em 0em 0.4em #ffffff95";
    var dice = $(".title");
    var botones = $(".botones");

    // Clean current player active highlight
    jugadorActual.div.style.boxShadow = "none";
    juego.casillas[jugadorActual.posicion].div.style.boxShadow = "none";
    
    // Prepare next player active highlight
    jugadorSiguiente.div.style.boxShadow = borde;
    juego.casillas[jugadorSiguiente.posicion].div.style.backgroundColor =
      jugadorSiguiente.color;
    juego.casillas[jugadorSiguiente.posicion].div.style.boxShadow = borde;

    // If buy/pass buttons are visible, hide them and restore dice
    if (botones.css("visibility") == "visible") {
      juego.mostrar(dice);
      juego.ocultar(botones);
    }

    juego.ronda++;
  }

  mostrar(div) {
    div.css("visibility", "visible");
    div.css("opacity", "1");
  }

  ocultar(div) {
    div.css("opacity", "0");
    div.css("visibility", "hidden");
  }

  cambiarMensaje(msg) {
    let mensajeDiv = $("#mensaje");

    mensajeDiv.html(msg);
    this.mostrar(mensajeDiv);

    // Hide message after 3 seconds
    setTimeout(() => {
      this.ocultar(mensajeDiv);
    }, 3000);
  }
}