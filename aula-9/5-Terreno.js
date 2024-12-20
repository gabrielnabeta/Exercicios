window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    var largura = document.getElementById("largura");

    var comprimento = document.getElementById("comprimento");

    var ValorM2 = document.getElementById("vM2");

    btn1.onclick = function (e) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                alert(this.responseText);
            }
        });

        xhr.open("GET", "https://localhost:44325/api/aula8/Terreno?largura=" + largura + "&comprimento=" + comprimento + "&valorM2" + ValorM2);

        xhr.send();

    }
}