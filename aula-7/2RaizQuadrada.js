window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    btn1.onclick = function (e) {

        var numero = document.getElementById("txt1").value;
        var num = parseInt(numero);

        var calc = raizQuadrada(numero);

        alert(calc);
    }

    function raizQuadrada(numero) {

        var raiz = numero * numero;

        return raiz;
    }
}