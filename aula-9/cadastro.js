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
        alert("O cadastro foi realizado com sucesso para o usuario" + email);
    };
}