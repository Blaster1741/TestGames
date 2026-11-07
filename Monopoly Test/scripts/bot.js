export default class BotEngine {
  /**
   * Triggers automated dice roll for an AI turn
   */
  static turnBot(juego, bot) {
    setTimeout(() => {
      let diceElem = document.getElementById("dice");
      if (diceElem && $(".title").css("visibility") === "visible") {
        diceElem.click();
      }
    }, 1000);
  }

  /**
   * Determines if the bot buys an unowned property
   */
  static decisionComprar(juego, bot, casilla) {
    setTimeout(() => {
      const buffer = 200; // Reserve safety fund
      if (bot.dinero - casilla.coste >= buffer) {
        console.log(`🤖 Bot ${bot.nombre} buys ${casilla.nombre}`);
        $("#comprar").click();
      } else {
        console.log(`🤖 Bot ${bot.nombre} passes on ${casilla.nombre}`);
        $("#pasar").click();
      }
    }, 1200);
  }

  /**
   * Evaluates proposed trade offers based on total property & cash value
   */
  static evaluateTradeOffer(bot, offeredCash, offeredProps, requestedCash, requestedProps) {
    let offeredValue = offeredCash;
    offeredProps.forEach((prop) => { offeredValue += prop.coste; });

    let requestedValue = requestedCash;
    requestedProps.forEach((prop) => { requestedValue += prop.coste; });

    const accepted = offeredValue >= requestedValue;
    console.log(`🤖 Bot ${bot.nombre} trade evaluation: Offered (${offeredValue}₱) vs Requested (${requestedValue}₱) -> ${accepted ? 'ACCEPTED' : 'REJECTED'}`);
    return accepted;
  }
}