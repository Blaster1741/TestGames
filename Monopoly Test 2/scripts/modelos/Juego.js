import Constructora from "./Constructora.js";
import BotEngine from "../bot.js";

export default class Juego {
  constructor() {
    this.casillas = Constructora.construirCasillas();
    this.jugadores = Constructora.construirJugadores();
    this.ronda = 0;
    this.botones = $(".botones");
    this.jugadoresMuertos = [];

    this.#initialize();
  }

  #initialize() {
    let casillas = this.casillas;
    let jugadores = this.jugadores;

    jugadores.forEach((jugador) => {
      let container = casillas[jugador.posicion].div.querySelector(".fichas-container");
      if (container) container.appendChild(jugador.fichaImg);
    });

    jugadores[0].div.style.boxShadow = "inset 0em 0em 0em 0.4em #ffffff95";

    if (jugadores[0].isBot) {
      BotEngine.turnBot(this, jugadores[0]);
    }
  }

  static SiguienteTurno(juego, n) {
    let _jugadores = juego.jugadores;
    let totalPlayers = _jugadores.length;
    let jugadorActual = _jugadores[juego.ronda % totalPlayers];
    var casilla;

    if (juego.jugadoresMuertos.length < totalPlayers - 1) {
      if (jugadorActual.vivo) {
        jugadorVivo(Juego, mostrarBtns);
      } else {
        if (juego.jugadoresMuertos.indexOf(jugadorActual) === -1) {
          juego.jugadoresMuertos.push(jugadorActual);
        }
        Juego.pasar(juego);
        Juego.SiguienteTurno(juego, n);
      }
    } else {
      acabarJuego(_jugadores);
    }

    function mostrarBtns() {
      var dice = $(".title");
      juego.mostrar(juego.botones);
      juego.ocultar(dice);
    }

    function jugadorVivo(Juego, mostrarBtns) {
      casilla = Juego.moverFicha(juego, jugadorActual, n);

      switch (casilla.tipo) {
        case "property":
          if (casilla.propietario == null) {
            if (jugadorActual.dinero > casilla.coste) {
              if (jugadorActual.isBot) {
                BotEngine.decisionComprar(juego, jugadorActual, casilla);
              } else {
                mostrarBtns();
              }
            } else {
              juego.cambiarMensaje(`${jugadorActual.nombre} cannot afford ${casilla.nombre}`);
              Juego.pasar(juego);
            }
          } else {
            if (casilla.propietario !== jugadorActual) {
              jugadorActual.pagarAlquiler(casilla);
              juego.cambiarMensaje(`${jugadorActual.nombre} paid rent to ${casilla.propietario.nombre}`);
            }
            Juego.pasar(juego);
          }
          break;

        case "fee luxury-tax":
        case "fee income-tax":
          jugadorActual.pagarImpuesto(casilla);
          juego.cambiarMensaje(`${jugadorActual.nombre} paid taxes`);
          Juego.pasar(juego);
          break;

        default:
          Juego.pasar(juego);
          break;
      }
    }

    function acabarJuego(jugadores) {
      let mensajeDiv = $("#mensaje");
      let jugadorVivo = jugadores.filter((e) => e.vivo)[0];
      juego.ocultar($(".title"));
      mensajeDiv.css("grid-row", "4");
      mensajeDiv.html(`WINNER: ${jugadorVivo.nombre.toUpperCase()} HAS WON THE GAME!`);
      mensajeDiv.css("visibility", "visible").css("opacity", "1");
    }
  }

  static moverFicha(juego, jugadorActual, n) {
    let posicionAnterior = jugadorActual.posicion;

    jugadorActual.posicion = (posicionAnterior + n) % 40;
    let casillaObjetivo = juego.casillas[jugadorActual.posicion];

    let container = casillaObjetivo.div.querySelector(".fichas-container");
    if (container) {
      container.appendChild(jugadorActual.fichaImg);
    }

    if (posicionAnterior > jugadorActual.posicion) {
      jugadorActual.vuelta();
    }

    return casillaObjetivo;
  }

  static comprar(juego) {
    let totalPlayers = juego.jugadores.length;
    let jugadorComprador = juego.jugadores[juego.ronda % totalPlayers];
    let casillaComprada = juego.casillas[jugadorComprador.posicion];

    jugadorComprador.comprar(casillaComprada);
    juego.cambiarMensaje(`${jugadorComprador.nombre} bought ${casillaComprada.nombre}`);
    Juego.pasar(juego);
  }

  static pasar(juego) {
    let totalPlayers = juego.jugadores.length;
    let jugadorActual = juego.jugadores[juego.ronda % totalPlayers];
    let jugadorSiguiente = juego.jugadores[(juego.ronda + 1) % totalPlayers];

    Juego.pasarAlSiguiente(juego, jugadorActual, jugadorSiguiente);
  }

  static pasarAlSiguiente(juego, jugadorActual, jugadorSiguiente) {
    var borde = "inset 0em 0em 0em 0.4em #ffffff95";
    var dice = $(".title");
    var botones = $(".botones");

    jugadorActual.div.style.boxShadow = "none";
    jugadorSiguiente.div.style.boxShadow = borde;

    if (botones.css("visibility") === "visible") {
      juego.mostrar(dice);
      juego.ocultar(botones);
    }

    juego.ronda++;

    if (jugadorSiguiente.vivo && jugadorSiguiente.isBot) {
      BotEngine.turnBot(juego, jugadorSiguiente);
    }
  }

  static ejecutarTrade(ofreciente, receptor, ofertaCash, ofertaProps, requestCash, requestProps) {
    if (ofertaCash > 0) {
      ofreciente.dinero -= ofertaCash;
      receptor.dinero += ofertaCash;
    }
    if (requestCash > 0) {
      receptor.dinero -= requestCash;
      ofreciente.dinero += requestCash;
    }

    ofertaProps.forEach((prop) => {
      ofreciente.propiedades = ofreciente.propiedades.filter((p) => p !== prop);
      receptor.propiedades.push(prop);
      prop.propietario = receptor;
      prop.div.style.boxShadow = "inset 0em 0em 0em 0.4em " + receptor.color;
    });

    requestProps.forEach((prop) => {
      receptor.propiedades = receptor.propiedades.filter((p) => p !== prop);
      ofreciente.propiedades.push(prop);
      prop.propietario = ofreciente;
      prop.div.style.boxShadow = "inset 0em 0em 0em 0.4em " + ofreciente.color;
    });

    ofreciente.divDinero.textContent = `${ofreciente.dinero} ₱`;
    receptor.divDinero.textContent = `${receptor.dinero} ₱`;
    ofreciente.propiedadesCantidad.textContent = ofreciente.propiedades.length;
    receptor.propiedadesCantidad.textContent = receptor.propiedades.length;
  }

  mostrar(div) {
    div.css("visibility", "visible").css("opacity", "1");
  }

  ocultar(div) {
    div.css("opacity", "0").css("visibility", "hidden");
  }

  cambiarMensaje(msg) {
    let mensajeDiv = $("#mensaje");
    mensajeDiv.html(msg);
    this.mostrar(mensajeDiv);
    setTimeout(() => {
      this.ocultar(mensajeDiv);
    }, 2500);
  }
}