window.onload = function (e) {

    var btnLogin = document.getElementById("btnLogin");

    var txtEmail = document.getElementById("txtEmail");

    var txtSenha = document.getElementById("txtSenha");


    txtEmail.focus();

    btnLogin.onclick = function (e) {

        e.preventDefault();

        var email = txtEmail.value;

        var senha = txtSenha.value;

        if (email == "") {
            exibirErro("email obrigatório.");
        }
        else if (senha == "") {
            exibirErro("senha obrigatória.");
        }
        else {
            realizarLogin(email, senha); 
        }
    };

    function exibirErro(mensagem) {

        var spnErro = document.getElementById("spnErro");

        spnErro.innerText = mensagem;

        spnErro.style.display = "Block";

        setTimeout(function () {
            spnErro.style.display = "none";
        }, 5000);
    };

    function realizarLogin(email, senha) {
        alert("O login foi realizado para o usuário" + email);
    };
}