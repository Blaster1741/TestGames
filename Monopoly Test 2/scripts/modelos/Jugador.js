export default class Jugador {
  constructor(div, pData) {
    this.div = div;
    this.nombre = pData ? pData.name : div.getElementsByClassName("nombre")[0].innerHTML;
    this.divDinero = div.getElementsByClassName("dinero")[0];
    this.dinero = pData ? pData.money : (Number.parseInt(this.divDinero.innerHTML.replace(/[^0-9]/g, "")) || 4000);
    this.posicion = pData ? pData.position : 0;
    this.isBot = pData ? pData.isBot : false;
    this.icon = pData ? pData.icon : "car";
    
    this.color = window
      .getComputedStyle(div, null)
      .getPropertyValue("background-color");
    this.propiedades = [];
    this.propiedadesCantidad = div.getElementsByClassName("propiedades-cantidad")[0];
    this.vivo = this.#getVivo();

    this.fichaImg = document.createElement("img");
    this.fichaImg.src = `./static/iconos/${this.icon}.png`;
    this.fichaImg.className = "ficha-piece";
    this.fichaImg.title = `${this.nombre} (${this.icon})`;
    this.fichaImg.style.borderColor = this.color;
  }

  #getVivo() {
    let vivoElem = this.div.getElementsByClassName("vivo")[0];
    let vivoVal = vivoElem ? Number.parseInt(vivoElem.innerHTML) : 1;

    if (vivoVal === 1) {
      return true;
    } else {
      this.#transferencia(-(this.dinero + 1));
      return false;
    }
  }

  comprar(propiedad) {
    this.#transferencia(-propiedad.coste);
    this.propiedades.push(propiedad);
    propiedad.div.style.boxShadow = "inset 0em 0em 0em 0.4em " + this.color;
    propiedad.propietario = this;
    this.propiedadesCantidad.innerHTML = this.propiedades.length;
  }

  pagarAlquiler(casilla) {
    let cantidad = Math.floor(casilla.coste / 3);
    casilla.propietario.cobrarAlquiler(cantidad);
    this.#transferencia(-cantidad);
  }

  cobrarAlquiler(cantidad) {
    this.#transferencia(cantidad);
  }

  pagarImpuesto(casilla) {
    this.#transferencia(-casilla.coste);
  }

  vuelta() {
    this.#transferencia(200);
  }

  #transferencia(cantidad) {
    let color = cantidad > 0 ? "#6eda3c" : "#e73737";
    this.dinero += cantidad;

    if (this.dinero > 0) {
      this.divDinero.style.color = color;
      this.divDinero.innerHTML = cantidad > 0 ? `+$${cantidad}` : `-$${Math.abs(cantidad)}`;

      setTimeout(() => {
        this.divDinero.style.color = "white";
        this.divDinero.innerHTML = `$${this.dinero}`;
        this.div.style.boxShadow = "none";
      }, 3000);
    } else {
      bancarrota(this);
    }

    function bancarrota(jugador) {
      jugador.propiedades.forEach(function (e) {
        e.propietario = null;
        e.div.style.boxShadow = "none";
      });

      jugador.vivo = false;
      jugador.div.style.backgroundColor = "#9E9E9E";
      jugador.divDinero.innerHTML = "$0";
      jugador.propiedadesCantidad.innerHTML = "0";
      if (jugador.fichaImg.parentNode) {
        jugador.fichaImg.parentNode.removeChild(jugador.fichaImg);
      }

      let mensajeDiv = $("#mensaje");
      mensajeDiv.html(`Player ${jugador.nombre} went bankrupt!`);
      mensajeDiv.css("visibility", "visible").css("opacity", "1");
      setTimeout(() => {
        mensajeDiv.css("opacity", "0").css("visibility", "hidden");
      }, 5000);
    }
  }
}