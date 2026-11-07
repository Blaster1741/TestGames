let dice = document.getElementById("dice");
let outputDiv = document.getElementById("dice-output");

if (dice) {
  dice.addEventListener("click", rollDice);
}

function rollDice() {
  let numero = Math.floor(Math.random() * 6) + 1;

  // Set dice face dataset
  dice.dataset.side = numero;

  // Trigger animation
  dice.classList.toggle("reRoll");

  // Set output value and notify game controller after 1.5s roll animation
  setTimeout(function () {
    if (outputDiv) {
      outputDiv.innerText = numero;
    }
    document.dispatchEvent(new CustomEvent("diceRolled", { detail: numero }));
  }, 1500);
}