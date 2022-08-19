let email = document.getElementById('email');
let password = document.getElementById('senha');
let btnEntrar = document.getElementByTagName('button');


function loginRealizado() {
    if (email.value == '' || senha.value == '') {
        alert('Preencha todos os campos');
    } else {
        alert('Login realizado com sucesso');
    }
}