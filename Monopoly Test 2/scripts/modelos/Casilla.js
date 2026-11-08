export default class Casilla {
  constructor(div) {
    this.div = div;
    this.tipo = this.#getTipo();
    this.nombre = this.#getNombre();
    this.color = this.#getColor();
    this.coste = this.#getCoste();
    this.propietario = null;
    this.historial = [];
  }

  #getNombre() {
    if(this.tipo == "property"){
      return this.div.getElementsByClassName("name")[0].textContent;
    } else {
      return null;
    }
  }

  #getTipo() {
    return this.div.getAttribute("class").replace("space ", "");
  }

  #getColor() {
    if(this.tipo == "property")
      return window.getComputedStyle(this.div, null).getPropertyValue('background-color');
    else
      return null;
  }

  #getCoste() {
    var coste = null;

    if(this.tipo == "property") {
      let priceText = this.div.getElementsByClassName("price")[0].innerHTML;
      coste = parseInt(priceText.replace(/[^0-9]/g, ""));
    } else if(this.tipo.includes("fee")) {
      let feeText = this.div.getElementsByClassName("instructions")[0].innerHTML;
      coste = parseInt(feeText.replace(/[^0-9]/g, ""));      
    }
    
    return coste;
  }  
}