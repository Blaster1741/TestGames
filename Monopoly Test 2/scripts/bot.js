export default class BotEngine {
  static turnBot(juego, bot) {
    setTimeout(() => {
      let diceElem = document.getElementById("dice");
      if (diceElem && $(".title").css("visibility") === "visible") {
        diceElem.click();
      }
    }, 1000);
  }

  static decisionComprar(juego, bot, casilla) {
    setTimeout(() => {
      const buffer = 200;
      if (bot.dinero - casilla.coste >= buffer) {
        console.log(`[BOT] ${bot.nombre} buys ${casilla.nombre}`);
        $("#comprar").click();
      } else {
        console.log(`[BOT] ${bot.nombre} passes on ${casilla.nombre}`);
        $("#pasar").click();
      }
    }, 1200);
  }

  static evaluateTradeOffer(bot, offeredCash, offeredProps, requestedCash, requestedProps) {
    let offeredValue = offeredCash;
    offeredProps.forEach((prop) => { offeredValue += prop.coste; });

    let requestedValue = requestedCash;
    requestedProps.forEach((prop) => { requestedValue += prop.coste; });

    const accepted = offeredValue >= requestedValue;
    console.log(`[BOT] ${bot.nombre} trade valuation: Offered (${offeredValue}₱) vs Requested (${requestedValue}₱) -> ${accepted ? 'ACCEPTED' : 'REJECTED'}`);
    return accepted;
  }
}