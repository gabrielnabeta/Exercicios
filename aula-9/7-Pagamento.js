window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    var nome = document.getElementById("nome");

    var valorHora = document.getElementById("valorHora");

    var qtdHoras = document.getElementById("qtdHoras");

    btn1.onclick = function (e) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                alert(this.responseText);
            }
        });

        xhr.open("GET", "https://localhost:44325/api/aula8/Pagamento?nome=" + nome + "&valorHora=" + valorHora + "&qtdHoras" + qtdHoras);

        xhr.send();

    }

}