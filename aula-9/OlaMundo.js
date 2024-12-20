window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    btn1.onclick = function (e) {

        OlaMundo();
    };

    function OlaMundo() {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                alert(this.responseText);
            }
        });

        xhr.open("GET", "https://localhost:44325/api/aula8/olaMundo");

        xhr.send();
    };
}