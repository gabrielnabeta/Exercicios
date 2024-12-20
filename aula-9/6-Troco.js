window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    var PrecoUnidade = document.getElementById("pUnit");

    var qtd = document.getElementById("qtd");

    var DinheiroRecebido = document.getElementById("valorC");

    btn1.onclick = function (e) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                alert(this.responseText);
            }
        });

        xhr.open("GET", "https://localhost:44325/api/aula8/Troco?precoUnit=" + PrecoUnidade + "qtd" + qtd + "DinheiroRecebido" + DinheiroRecebido);

        xhr.send();

    }

}