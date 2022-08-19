let nome = document.getElementById('nome');
let email = document.getElementById('email');
let password = document.getElementById('senha');
let btnCadastrar = document.getElementByTagName('button');


function cadastroRealizado() {
    if (nome.value == '' || email.value == '' || password.value == '') {
        alert('Preencha todos os campos');
    } else {
        alert('Cadastro realizado com sucesso');
    }
}