window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    var number1 = document.getElementById("number1");

    var number2 = document.getElementById("number2");

    btn1.onclick = function (e) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                alert(this.responseText);
            }
        });

        xhr.open("GET", "https://localhost:44325/api/aula8/calculadora?valor1=" + valor1 + "&valor2=" + valor2);

        xhr.send();
    }
}