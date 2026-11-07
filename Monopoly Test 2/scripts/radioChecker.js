$(document).ready(function () {
  const icons = ["iron", "cart", "dog", "car", "hat", "ship", "shoe", "thimble"];
  const colors = ["morado", "rosa", "amarillo", "verde", "azul", "rojo", "naranja", "cian"];

  function buildPlayerCards(count) {
    let container = $(".tarjetas");
    container.empty();

    for (let i = 1; i <= count; i++) {
      let colorClass = colors[(i - 1) % colors.length];
      let isDefaultBot = i > 2;

      let cardHtml = `
        <div class="jugador ${colorClass}" data-player-id="${i}">
          <div class="Input">
            <input type="text" id="nombreJ${i}" name="nombreJ${i}" class="Input-text" 
                   value="${isDefaultBot ? 'Bot ' + i : 'Player ' + i}" required maxlength="20">
            <select class="type-select" id="tipoJ${i}">
              <option value="human" ${!isDefaultBot ? 'selected' : ''}>Human</option>
              <option value="bot" ${isDefaultBot ? 'selected' : ''}>AI Bot</option>
            </select>
          </div>
          <div class="fotos">
            ${icons.map((icon, idx) => `
              <input type="radio" name="foto${i}" id="fotoJ${i}_${idx}" value="${icon}">
              <label for="fotoJ${i}_${idx}" class="icon-label icon-${icon}" title="${icon}">ㅤ</label>
            `).join('')}
          </div>
        </div>
      `;
      container.append(cardHtml);
    }

    for (let i = 1; i <= count; i++) {
      $(`input[name='foto${i}'][value='${icons[(i - 1) % icons.length]}']`).prop("checked", true);
    }
    comprobarFotos();
  }

  $("#numPlayers").change(function () {
    buildPlayerCards(parseInt($(this).val()));
  });

  $(document).on("click", "input:radio", function () {
    let clicked = $(this);
    let name = clicked.attr("name");
    let val = clicked.attr("value");

    let duplicate = false;
    $("input:radio:checked").each(function () {
      if ($(this).attr("name") !== name && $(this).val() === val) {
        duplicate = true;
      }
    });

    if (duplicate) {
      clicked.prop("checked", false);
      alert(`The piece "${val}" is already selected by another player.`);
    }
    comprobarFotos();
  });

  function comprobarFotos() {
    let count = parseInt($("#numPlayers").val());
    let selectedCount = $("input:radio:checked").length;
    let btn = $("#reiniciar");

    if (selectedCount === count) {
      btn.show();
    } else {
      btn.hide();
    }
  }

  buildPlayerCards(4);

  $("#setup-form").submit(function (e) {
    e.preventDefault();

    let count = parseInt($("#numPlayers").val());
    let players = [];

    for (let i = 1; i <= count; i++) {
      players.push({
        id: i,
        name: $(`#nombreJ${i}`).val(),
        icon: $(`input[name='foto${i}']:checked`).val(),
        isBot: $(`#tipoJ${i}`).val() === "bot",
        money: 4000,
        properties: [],
        position: 0,
        alive: true
      });
    }

    localStorage.setItem("phpoly_players", JSON.stringify(players));
    window.location.href = "index.html";
  });
});