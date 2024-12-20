window.onload = function (e) {

    var btnEmail = document.getElementById("btnEmail");

    var txtEmail = document.getElementById("txtEmail");

    txtEmail.focus();

    btnEmail.onclick = function (e) {

        e.preventDefault();

        var email = txtEmail.value;

        if (email == "") {
            exibirMensagem("Informe o email.");
        }
        else {
            enviarEmail(email);
        }
    };
    function exibirMensagem(mensagem) {

        var spnErro = document.getElementById("spnErro");

        spnErro.innerText = mensagem;

        spnErro.style.display = "block";

        setTimeout (function () {
            spnErro.style.display = "none";
        }, 5000); 
    }; 

    function enviarEmail(email) {
        alert("O link para mudar senha foi enviado para o email " + email);
    };
}
   