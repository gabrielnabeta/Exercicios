window.onload = function (e) {

    var btnCadastrar = document.getElementById("btnCadastrar");

    var txtNome = document.getElementById("txtNome");

    var txtSobrenome = document.getElementById("txtSobrenome");

    var txtEmail = document.getElementById("txtEmail");

    var txtTelefone = document.getElementById("txtTelefone");

    var txtGenero = document.getElementById("txtGenero");

    var txtSenha = document.getElementById("txtSenha");

    txtNome.focus();

    btnCadastrar.onclick = function (e) {

        e.preventDefault();

        var nome = txtNome.value;

        var sobrenome = txtSobrenome.value;

        var email = txtEmail.value;

        var telefone = txtTelefone.value;

        var senha = txtSenha.value;

        var genero = txtGenero.value;

        if (nome == "") {
            exibirMsg("informe o nome");
        }
        else if (sobrenome == "") {
            exibirMsg("informe o sobrenome");
        }
        else if (email == "") {
            exibirMsg("informe o email");
        }
        else if (telefone == "") {
            exibirMsg("informe o telefone");
        }
        else if (senha == "") {
            exibirMsg("informe a senha");
        }
        else if (nome == "" || sobrenome == "" || email == "" || telefone == "" || senha == "")  {

            var mensagem = "Os campos acima são obrigatórios";

            exibirErro(mensagem);
        }
        else {
            cadastrar(nome, sobrenome, email, telefone, senha, genero);
        }
    };

    function exibirMsg(mensagem) {

        var spnErro = document.getElementById("spnErro"); 

        spnErro.innerText = mensagem;

        spnErro.style.display = "block";

        setTimeout(function () {
            spnErro.style.display = "none";
        }, 5000);  
    };

    function cadastrar(nome, sobrenome, email, telefone, senha, genero) {

        var data = JSON.stringify({
            "nome": nome,
            "sobrenome": sobrenome,
            "email": email,
            "telefone": telefone,
            "senha": senha,
            "genero": genero
        });

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                var result = JSON.parse(this.responseText);

                if (result.sucesso) {
                    alert('Cadastrou');
                }
                else {
                    exibirErro;
                }
            }
        });

        xhr.open("POST", "https://localhost:44325/api/usuario/Cadastro");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };

    function exibirErro(msg) {

    };
}