$(document).ready(function () {
    var radioValues = {
        "foto1": "",
        "foto2": "",
        "foto3": "",
        "foto4": "",
    };

    $("input:radio").click(function () {
        var radioClicked = $(this);
        var clickedName = radioClicked.attr("name");
        var clickedValue = radioClicked.attr("value");
        
        if (radioValues[clickedName] == clickedValue) {
            radioClicked.prop("checked", false);
            radioValues[clickedName] = "";
        } else {
            var repeticionesValue = 0;
            for (var value in radioValues) {
                if (radioValues[value] == clickedValue)
                    repeticionesValue++;
            }
            
            if (repeticionesValue > 0) {
                radioClicked.prop("checked", false);
                alert(`The icon "${clickedValue}" cannot be selected twice.`);
            } else {
                radioValues[clickedName] = clickedValue;
            }
        }

        comprobarFotos();
    });

    function comprobarFotos() {
        var btn = $("#reiniciar"); 

        if (Object.values(radioValues).indexOf("") == -1) {
            btn.show();
        } else if (btn.is(":visible")) {
            btn.hide();
        }
    }

    // Save game setup to localStorage and launch game board
    $("#setup-form").submit(function (e) {
        e.preventDefault();

        var initialMoney = 4000;
        var players = [
            { id: 1, name: $("#nombreJ1").val(), icon: radioValues.foto1, money: initialMoney, properties: [], position: 0, alive: true },
            { id: 2, name: $("#nombreJ2").val(), icon: radioValues.foto2, money: initialMoney, properties: [], position: 0, alive: true },
            { id: 3, name: $("#nombreJ3").val(), icon: radioValues.foto3, money: initialMoney, properties: [], position: 0, alive: true },
            { id: 4, name: $("#nombreJ4").val(), icon: radioValues.foto4, money: initialMoney, properties: [], position: 0, alive: true }
        ];

        localStorage.setItem("phpoly_players", JSON.stringify(players));
        window.location.href = "index.html";
    });
});