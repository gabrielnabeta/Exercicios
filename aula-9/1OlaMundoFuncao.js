window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    btn1.onclick = function (e) {

        var msg = "Ol� mundo";

        exibirMsg(msg);
    };

    function exibirMsg(msg) {

        alert(msg);
    }
}