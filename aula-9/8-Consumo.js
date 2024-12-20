window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    var distancia = document.getElementById("distancia");

    var CombustivelGasto = document.getElementById("CombustivelGasto");

    btn1.onclick = function (e) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                alert(this.responseText);
            }
        });

        xhr.open("GET", "https://localhost:44325/api/aula8/Consumo?distancia=" + distancia + "&combustivelGasto" + CombustivelGasto);

        xhr.send();

    }

}