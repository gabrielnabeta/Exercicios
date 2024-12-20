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

        var data = JSON.stringify({
            "email": email,
            "senha": senha
        });

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                var result = JSON.parse(this.responseText);

                if (result.sucesso) {
                    alert('logou');
                }
                else {
                    exibirErro(LoginResult.mensagem);
                }
            }
        });

        xhr.open("POST", "https://localhost:44325/api/usuario/login");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };
}